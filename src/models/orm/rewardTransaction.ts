import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class RewardTransaction {
  @PrimaryGeneratedColumn()
  rewardTransactionId: number;

  @Column()
  rewardBalanceId: number;

  @Column()
  customerChallengeId: number;

  @Column()
  transactionType: string;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  description: string;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  balanceBefore: number;

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  balanceAfter: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  constructor(
    rewardTransactionId: number,
    rewardBalanceId: number,
    customerChallengeId: number,
    transactionType: string,
    amount: number,
    description: string,
    balanceBefore: number,
    balanceAfter: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.rewardTransactionId = rewardTransactionId;
    this.rewardBalanceId = rewardBalanceId;
    this.customerChallengeId = customerChallengeId;
    this.transactionType = transactionType;
    this.amount = amount;
    this.description = description;
    this.balanceBefore = balanceBefore;
    this.balanceAfter = balanceAfter;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
