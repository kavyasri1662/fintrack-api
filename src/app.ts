import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './data-source';
import { transactionRouter } from './controllers/transactionController';
import { expenseRouter } from './controllers/expenseController';

export const createApp = async () => {
  await AppDataSource.initialize();
  const app = express();
  app.use(bodyParser.json());

  // Simple auth middleware for PoC: expects x-user-id header with the user id
  app.use((req:any, res, next) => {
    const uid = req.header('x-user-id');
    if(uid) req.userId = uid;
    next();
  });

  app.use('/transactions', transactionRouter);
  app.use('/expenses', expenseRouter);

  // health
  app.get('/health', (req, res) => res.json({ok: true}));

  return app;
};
