// db/rewardBalance.ts

import { AppDataSource } from "../config/data-source";
import { RewardBalance } from "../models/orm/rewardBalance";
import { Repository } from "typeorm";

const rewardBalanceRepository: Repository<RewardBalance> =
  AppDataSource.getRepository(RewardBalance);

/**
 * Get RewardBalance by ID.
 * @param rewardBalanceId - The ID of the RewardBalance.
 * @returns The RewardBalance entity or null if not found.
 */
export const getRewardBalanceById = async (
  rewardBalanceId: number
): Promise<RewardBalance | null> => {
  try {
    const rewardBalance = await rewardBalanceRepository.findOneBy({
      rewardBalanceId,
    });
    return rewardBalance;
  } catch (error) {
    console.error(
      `Error getting RewardBalance by ID ${rewardBalanceId}:`,
      error
    );
    throw new Error("Failed to get RewardBalance by ID.");
  }
};

/**
 * Get RewardBalance by Customer ID.
 * @param customerId - The Customer ID associated with the RewardBalance.
 * @returns The RewardBalance entity or null if not found.
 */
export const getRewardBalanceByCustomerId = async (
  customerId: string
): Promise<RewardBalance | null> => {
  try {
    const rewardBalance = await rewardBalanceRepository.findOneBy({
      customerId,
    });
    return rewardBalance;
  } catch (error) {
    console.error(
      `Error getting RewardBalance by Customer ID ${customerId}:`,
      error
    );
    throw new Error("Failed to get RewardBalance by Customer ID.");
  }
};

/**
 * Create a new RewardBalance.
 * @param rewardBalanceData - Partial RewardBalance data to create the entity.
 * @returns The newly created RewardBalance entity.
 */
export const createRewardBalance = async (
  rewardBalanceData: Partial<RewardBalance>
): Promise<RewardBalance> => {
  try {
    const newRewardBalance = rewardBalanceRepository.create(rewardBalanceData);
    const savedRewardBalance =
      await rewardBalanceRepository.save(newRewardBalance);
    return savedRewardBalance;
  } catch (error) {
    console.error("Error creating RewardBalance:", error);
    throw new Error("Failed to create RewardBalance.");
  }
};

/**
 * Update RewardBalance by ID.
 * @param rewardBalanceId - The ID of the RewardBalance to update.
 * @param updateData - Partial data to update the RewardBalance entity.
 * @returns The updated RewardBalance entity.
 */
export const updateRewardBalanceById = async (
  rewardBalanceId: number,
  updateData: Partial<RewardBalance>
): Promise<RewardBalance> => {
  try {
    const rewardBalance = await rewardBalanceRepository.findOneBy({
      rewardBalanceId,
    });
    if (!rewardBalance) {
      throw new Error("RewardBalance not found.");
    }
    Object.assign(rewardBalance, updateData);
    const updatedRewardBalance =
      await rewardBalanceRepository.save(rewardBalance);
    return updatedRewardBalance;
  } catch (error) {
    console.error(
      `Error updating RewardBalance with ID ${rewardBalanceId}:`,
      error
    );
    throw new Error("Failed to update RewardBalance.");
  }
};
