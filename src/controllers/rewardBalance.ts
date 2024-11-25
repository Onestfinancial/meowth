// controllers/http/rewardBalanceController.ts

import { Request, Response } from "express";
import * as dbRewardBalance from "../db/rewardBalance";

/**
 * Get RewardBalance by ID.
 * @route GET /reward-balance/:id
 */
export const getRewardBalanceByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rewardBalanceId = parseInt(req.params.id, 10);

    if (isNaN(rewardBalanceId)) {
      res.status(400).json({ message: "Invalid reward balance ID." });
      return;
    }

    const rewardBalance =
      await dbRewardBalance.getRewardBalanceById(rewardBalanceId);

    if (!rewardBalance) {
      res.status(404).json({ message: "Reward balance not found." });
      return;
    }

    res.status(200).json(rewardBalance);
  } catch (error) {
    console.error("Error in getRewardBalanceByIdController:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * Get RewardBalance by Customer ID.
 * @route GET /reward-balance/customer/:customerId
 */
export const getRewardBalanceByCustomerIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const customerId = req.params.customerId;

    if (!customerId) {
      res.status(400).json({ message: "Customer ID is required." });
      return;
    }

    const rewardBalance =
      await dbRewardBalance.getRewardBalanceByCustomerId(customerId);

    if (!rewardBalance) {
      res.status(404).json({
        message: "Reward balance not found for the given customer ID.",
      });
      return;
    }

    res.status(200).json(rewardBalance);
  } catch (error) {
    console.error("Error in getRewardBalanceByCustomerIdController:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * Create a new RewardBalance.
 * @route POST /reward-balance
 */
export const createRewardBalanceController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, currentBalance } = req.body;

    if (!customerId || typeof currentBalance !== "number") {
      res.status(400).json({ message: "Invalid input data." });
      return;
    }

    const rewardBalanceData = { customerId, currentBalance };

    const newRewardBalance =
      await dbRewardBalance.createRewardBalance(rewardBalanceData);

    res.status(201).json(newRewardBalance);
  } catch (error) {
    console.error("Error in createRewardBalanceController:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * Update RewardBalance by ID.
 * @route PUT /reward-balance/:id
 */
export const updateRewardBalanceByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rewardBalanceId = parseInt(req.params.id, 10);
    const updateData = req.body;

    if (isNaN(rewardBalanceId)) {
      res.status(400).json({ message: "Invalid reward balance ID." });
      return;
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      res.status(400).json({ message: "No data provided for update." });
      return;
    }

    const updatedRewardBalance = await dbRewardBalance.updateRewardBalanceById(
      rewardBalanceId,
      updateData
    );

    res.status(200).json(updatedRewardBalance);
  } catch (error) {
    console.error("Error in updateRewardBalanceByIdController:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
