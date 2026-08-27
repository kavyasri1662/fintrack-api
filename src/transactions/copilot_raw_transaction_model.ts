// RAW Copilot-generated Transaction model (UNREVIEWED)
// Prompt: "Generate a Transaction model and a Transaction service with create, get-by-user, and delete-all functions. Use a database."

// NOTE: Saved verbatim as produced by Copilot — unreviewed

import sqlite3 from 'sqlite3';

export class Transaction {
  id: number;
  userId: string;
  amount: number;
  description: string;
  date: string;

  constructor(u:any, a:any, d:any){
    this.userId = u; this.amount = a; this.description = d; this.date = new Date().toISOString();
  }
}

const db = new sqlite3.Database(':memory:');

db.serialize(()=>{
  db.run("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY, userId TEXT, amount REAL, description TEXT, date TEXT)");
});

export const TransactionService = {
  create: (t:any, cb:any) => {
    db.run("INSERT INTO transactions(userId, amount, description, date) VALUES(?,?,?,?)", [t.userId, t.amount, t.description, t.date], function(err:any){
      if(err) return cb(err);
      cb(null, {id: this.lastID});
    });
  },
  getByUser: (userId:any, cb:any) => {
    db.all("SELECT * FROM transactions WHERE userId = ?", [userId], (err:any, rows:any)=>{
      if(err) return cb(err);
      cb(null, rows);
    });
  },
  deleteAll: (cb:any) => {
    db.run("DELETE FROM transactions", [], (err:any)=>{
      cb(err);
    });
  }
};
