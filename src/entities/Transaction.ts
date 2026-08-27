import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({name: 'transactions'})
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: string;

  @Column('real')
  amount!: number;

  @Column()
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
