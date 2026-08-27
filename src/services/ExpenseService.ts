import { ExpenseRepository } from '../repositories/ExpenseRepository';
import { ValidationError } from '../utils/errors';

/**
 * ExpenseService: handles creation of shared expenses and balance calculations
 */
export const ExpenseService = {
  /**
   * Create a shared expense and calculate participant shares.
   * @param creatorId id of user creating the expense
   * @param payload {description, totalAmount, splitType, participants}
   */
  async createSharedExpense(creatorId: string, payload: any) {
    const { description, totalAmount, splitType, participants } = payload;
    if(!description) throw new ValidationError('description required');
    if(typeof totalAmount !== 'number' || Number.isNaN(totalAmount) || totalAmount <= 0) throw new ValidationError('totalAmount must be a positive number');
    if(!Array.isArray(participants) || participants.length < 2) throw new ValidationError('participants must be an array of at least 2 users');
    if(splitType !== 'equal' && splitType !== 'custom') throw new ValidationError('splitType must be either equal or custom');

    let calculatedParticipants: any[] = [];
    if(splitType === 'equal'){
      const share = parseFloat((totalAmount / participants.length).toFixed(2));
      // To avoid rounding issues, assign remainder to first participant
      let remainder = parseFloat((totalAmount - (share * participants.length)).toFixed(2));
      for(const p of participants){
        const amt = share + (remainder > 0 ? 0.01 : 0);
        if(remainder > 0) remainder = parseFloat((remainder - 0.01).toFixed(2));
        calculatedParticipants.push({ userId: p.userId, share: amt });
      }
    }else{
      // custom
      let sum = 0;
      for(const p of participants){
        if(typeof p.amount !== 'number') throw new ValidationError('Each participant must have a numeric amount for custom splits');
        sum += p.amount;
        calculatedParticipants.push({ userId: p.userId, share: p.amount });
      }
      sum = parseFloat(sum.toFixed(2));
      if(Math.abs(sum - totalAmount) > 0.009) throw new ValidationError('Custom participant amounts must sum to totalAmount');
    }

    const saved = await ExpenseRepository.create({
      creatorId,
      description,
      totalAmount,
      splitType,
      participants: calculatedParticipants as any
    });
    return saved;
  },

  /**
   * Compute pending balances for a user across all expenses
   * Returns an array of { userId, net, direction } meaning relative to the current user
   */
  async getPendingBalances(userId: string){
    const expenses = await ExpenseRepository.findAll();

    // Accumulate pairwise amounts: map[from][to] = amount
    const pairwise: Record<string, Record<string, number>> = {};

    const add = (from:string, to:string, amt:number) =>{
      if(!pairwise[from]) pairwise[from] = {};
      pairwise[from][to] = (pairwise[from][to] || 0) + amt;
    };

    for(const e of expenses){
      const creator = e.creatorId;
      for(const p of e.participants){
        const participantId = p.userId;
        const share = p.share;
        if(participantId === creator) continue; // creator's own share
        // participant owes creator
        add(participantId, creator, share);
      }
    }

    // compute nets for requested user
    const result: Array<{userId:string, net:number, direction:string}> = [];
    const others = new Set<string>();
    Object.keys(pairwise).forEach(f => Object.keys(pairwise[f]).forEach(t => { if(f !== userId && t !== userId) others.add(f); others.add(f); others.add(t); }));

    const counterparties = new Set<string>();
    Object.keys(pairwise).forEach(f => Object.keys(pairwise[f]).forEach(t => { counterparties.add(f); counterparties.add(t); }));
    counterparties.delete(userId);

    counterparties.forEach(other =>{
      const aToB = (pairwise[userId] && pairwise[userId][other]) || 0;
      const bToA = (pairwise[other] && pairwise[other][userId]) || 0;
      const net = parseFloat((bToA - aToB).toFixed(2));
      if(net > 0){
        // other owes user net
        result.push({userId: other, net, direction: 'owed'});
      }else if(net < 0){
        result.push({userId: other, net: Math.abs(net), direction: 'owes'});
      }
    });

    return result;
  }
};
