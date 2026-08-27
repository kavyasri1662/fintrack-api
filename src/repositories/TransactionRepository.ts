import { AppDataSource } from '../data-source';
import { TransactionEntity } from '../entities/Transaction';

/**
 * Transaction repository encapsulates DB operations for transactions.
 */
export const TransactionRepository = {
  async create(tx: Partial<TransactionEntity>) {
    const repo = AppDataSource.getRepository(TransactionEntity);
    const ent = repo.create(tx);
    return repo.save(ent);
  },

  async findByUser(userId: string) {
    const repo = AppDataSource.getRepository(TransactionEntity);
    return repo.find({where: {userId}});
  },

  async deleteAll() {
    const repo = AppDataSource.getRepository(TransactionEntity);
    return repo.clear();
  }
};
