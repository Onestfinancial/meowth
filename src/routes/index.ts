import { Router } from "express";
import rewardBalanceRoutes from "./rewardBalance";

const router = Router();

router.use("/reward-balance", rewardBalanceRoutes);

export default router;
