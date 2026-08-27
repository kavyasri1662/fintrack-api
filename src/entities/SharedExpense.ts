import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { Participant } from "./Participant";

@Entity({name: 'shared_expenses'})
export class SharedExpense {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  creatorId!: string;

  @Column()
  description!: string;

  @Column('real')
  totalAmount!: number;

  @Column()
  splitType!: string; // 'equal' | 'custom'

  @OneToMany(() => Participant, p => p.expense, {cascade: true, eager: true})
  participants!: Participant[];

  @CreateDateColumn()
  createdAt!: Date;
}
