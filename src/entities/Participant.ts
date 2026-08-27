import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { SharedExpense } from "./SharedExpense";

@Entity({name: 'participants'})
export class Participant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: string;

  @Column('real')
  share!: number;

  @ManyToOne(() => SharedExpense, expense => expense.participants, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'expenseId'})
  expense!: SharedExpense;

  @Column()
  expenseId!: number;
}
