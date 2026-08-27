import { AppDataSource } from '../data-source';
import { SharedExpense } from '../entities/SharedExpense';
import { Participant } from '../entities/Participant';

/**
 * Repository for shared expenses
 */
export const ExpenseRepository = {
  async create(expense: Partial<SharedExpense>){
    const repo = AppDataSource.getRepository(SharedExpense);
    const ent = repo.create(expense);
    return repo.save(ent);
  },

  async findAll(){
    const repo = AppDataSource.getRepository(SharedExpense);
    return repo.find();
  },

  async findByUser(userId: string){
    const repo = AppDataSource.getRepository(SharedExpense);
    // expenses where user is creator or a participant
    return repo.createQueryBuilder('e')
      .leftJoinAndSelect('e.participants', 'p')
      .where('e.creatorId = :uid', {uid: userId})
      .orWhere('p.userId = :uid', {uid: userId})
      .getMany();
  }
};
