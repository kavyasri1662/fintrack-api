import { TransactionRepository } from '../repositories/TransactionRepository';

/**
 * TransactionService provides business operations around transactions.
 */
export const TransactionService = {
  /**
   * Create a transaction for a user.
   */
  async createTransaction(userId: string, amount: number, description: string) {
    if(!userId) throw new Error('userId required');
    if(typeof amount !== 'number' || Number.isNaN(amount)) throw new Error('amount must be a number');
    if(!description) throw new Error('description required');
    const tx = await TransactionRepository.create({userId, amount, description});
    return tx;
  },

  /**
   * Get transactions for a user ensuring users only access their own data.
   */
  async getTransactionsForUser(userId: string) {
    if(!userId) throw new Error('userId required');
    return TransactionRepository.findByUser(userId);
  },

  async deleteAllTransactions() {
    return TransactionRepository.deleteAll();
  }
};
