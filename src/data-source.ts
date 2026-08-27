import "reflect-metadata";
import { DataSource } from "typeorm";
import { TransactionEntity } from "./entities/Transaction";
import { SharedExpense } from "./entities/SharedExpense";
import { Participant } from "./entities/Participant";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  logging: false,
  entities: [TransactionEntity, SharedExpense, Participant],
});
