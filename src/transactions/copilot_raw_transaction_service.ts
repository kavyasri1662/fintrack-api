// RAW Copilot-generated Transaction service (UNREVIEWED)
// Prompt used exactly as provided. Saved verbatim.

import {Transaction, TransactionService as RawService} from './copilot_raw_transaction_model';

export async function createTransaction(userId:any, amount:any, description:any){
  const t = new Transaction(userId, amount, description);
  return new Promise((resolve, reject)=>{
    RawService.create(t, (err:any, res:any)=>{
      if(err) return reject(err);
      resolve(res);
    });
  });
}

export async function getTransactionsForUser(userId:any){
  return new Promise((resolve, reject)=>{
    RawService.getByUser(userId, (err:any, rows:any)=>{
      if(err) return reject(err);
      resolve(rows);
    });
  });
}

export async function deleteAllTransactions(){
  return new Promise((resolve, reject)=>{
    RawService.deleteAll((err:any)=>{
      if(err) return reject(err);
      resolve(true);
    });
  });
}
