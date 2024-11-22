// db/rewardTransaction.ts

import { AppDataSource } from "../config/data-source";
import { RewardTransaction } from "../models/orm/rewardTransaction";
import { Repository } from "typeorm";

const rewardTransactionRepository: Repository<RewardTransaction> =
  AppDataSource.getRepository(RewardTransaction);

/**
 * Get RewardTransaction by ID.
 * @param rewardTransactionId - The ID of the RewardTransaction.
 * @returns The RewardTransaction entity or null if not found.
 */
export const getRewardTransactionById = async (
  rewardTransactionId: number
): Promise<RewardTransaction | null> => {
  try {
    const rewardTransaction = await rewardTransactionRepository.findOneBy({
      rewardTransactionId,
    });
    return rewardTransaction;
  } catch (error) {
    console.error(
      `Error getting RewardTransaction by ID ${rewardTransactionId}:`,
      error
    );
    throw new Error("Failed to get RewardTransaction by ID.");
  }
};

/**
 * Get RewardTransactions by RewardBalance ID.
 * @param rewardBalanceId - The RewardBalance ID associated with the transactions.
 * @returns An array of RewardTransaction entities.
 */
export const getRewardTransactionsByRewardBalanceId = async (
  rewardBalanceId: number
): Promise<RewardTransaction[]> => {
  try {
    const rewardTransactions = await rewardTransactionRepository.findBy({
      rewardBalanceId,
    });
    return rewardTransactions;
  } catch (error) {
    console.error(
      `Error getting RewardTransactions by RewardBalance ID ${rewardBalanceId}:`,
      error
    );
    throw new Error("Failed to get RewardTransactions by RewardBalance ID.");
  }
};

/**
 * Create a new RewardTransaction.
 * @param rewardTransactionData - Partial RewardTransaction data to create the entity.
 * @returns The newly created RewardTransaction entity.
 */
export const createRewardTransaction = async (
  rewardTransactionData: Partial<RewardTransaction>
): Promise<RewardTransaction> => {
  try {
    const newRewardTransaction = rewardTransactionRepository.create(
      rewardTransactionData
    );
    const savedRewardTransaction =
      await rewardTransactionRepository.save(newRewardTransaction);
    return savedRewardTransaction;
  } catch (error) {
    console.error("Error creating RewardTransaction:", error);
    throw new Error("Failed to create RewardTransaction.");
  }
};

/**
 * Update RewardTransaction by ID.
 * @param rewardTransactionId - The ID of the RewardTransaction to update.
 * @param updateData - Partial data to update the RewardTransaction entity.
 * @returns The updated RewardTransaction entity.
 */
export const updateRewardTransactionById = async (
  rewardTransactionId: number,
  updateData: Partial<RewardTransaction>
): Promise<RewardTransaction> => {
  try {
    const rewardTransaction = await rewardTransactionRepository.findOneBy({
      rewardTransactionId,
    });
    if (!rewardTransaction) {
      throw new Error("RewardTransaction not found.");
    }
    Object.assign(rewardTransaction, updateData);
    const updatedRewardTransaction =
      await rewardTransactionRepository.save(rewardTransaction);
    return updatedRewardTransaction;
  } catch (error) {
    console.error(
      `Error updating RewardTransaction with ID ${rewardTransactionId}:`,
      error
    );
    throw new Error("Failed to update RewardTransaction.");
  }
};
