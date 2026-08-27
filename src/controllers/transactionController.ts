import { Router } from 'express';
import { TransactionService } from '../services/TransactionService';

export const transactionRouter = Router();

// Create a transaction (for completeness)
transactionRouter.post('/', async (req:any, res) => {
  try{
    const userId = req.userId;
    if(!userId) return res.status(401).json({error: 'Unauthorized'});
    const { amount, description } = req.body;
    if(typeof amount !== 'number' || !description) return res.status(400).json({error: 'Invalid input'});
    const tx = await TransactionService.createTransaction(userId, amount, description);
    res.status(201).json(tx);
  }catch(err:any){
    console.error(err);
    res.status(500).json({error: 'Internal error'});
  }
});

// Get transactions for current user
transactionRouter.get('/', async (req:any, res) => {
  try{
    const userId = req.userId;
    if(!userId) return res.status(401).json({error: 'Unauthorized'});
    const rows = await TransactionService.getTransactionsForUser(userId);
    res.json(rows);
  }catch(err:any){
    console.error(err);
    res.status(500).json({error: 'Internal error'});
  }
});
