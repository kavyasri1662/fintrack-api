import { Router } from 'express';
import { ExpenseService } from '../services/ExpenseService';

export const expenseRouter = Router();

/**
 * Create a shared expense
 * Body: { description, totalAmount, splitType: 'equal'|'custom', participants: [{userId, amount?}] }
 */
expenseRouter.post('/', async (req:any, res) => {
  try{
    const userId = req.userId;
    if(!userId) return res.status(401).json({error: 'Unauthorized'});
    const payload = req.body;
    const expense = await ExpenseService.createSharedExpense(userId, payload);
    res.status(201).json(expense);
  }catch(err:any){
    if(err.name === 'ValidationError') return res.status(400).json({error: err.message});
    console.error(err);
    res.status(500).json({error: 'Internal error'});
  }
});

/**
 * Get pending balances for current user
 */
expenseRouter.get('/balances', async (req:any, res) => {
  try{
    const userId = req.userId;
    if(!userId) return res.status(401).json({error: 'Unauthorized'});
    const balances = await ExpenseService.getPendingBalances(userId);
    res.json(balances);
  }catch(err:any){
    console.error(err);
    res.status(500).json({error: 'Internal error'});
  }
});
