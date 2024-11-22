import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class RewardBalance {
  @PrimaryGeneratedColumn()
  rewardBalanceId: number;

  @Column()
  customerId: string;

  @Column("decimal", { precision: 10, scale: 2 })
  currentBalance: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  constructor(
    rewardBalanceId: number,
    customerId: string,
    currentBalance: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.rewardBalanceId = rewardBalanceId;
    this.customerId = customerId;
    this.currentBalance = currentBalance;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
