// routes/rewardBalanceRoutes.ts

import { Router } from "express";
import {
  getRewardBalanceByIdController,
  getRewardBalanceByCustomerIdController,
  createRewardBalanceController,
  updateRewardBalanceByIdController,
} from "../controllers/http/rewardBalance";

const router = Router();

/**
 * @route POST /reward-balance
 * @desc Create a new RewardBalance
 */
router.post("/", createRewardBalanceController);

/**
 * @route GET /reward-balance/:id
 * @desc Get RewardBalance by ID
 */
router.get("/:id", getRewardBalanceByIdController);

/**
 * @route GET /reward-balance/customer/:customerId
 * @desc Get RewardBalance by Customer ID
 */
router.get("/customer/:customerId", getRewardBalanceByCustomerIdController);

/**
 * @route PUT /reward-balance/:id
 * @desc Update RewardBalance by ID
 */
router.put("/:id", updateRewardBalanceByIdController);

export default router;
