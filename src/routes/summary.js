import { Router } from "express";
import * as SummaryController from "controllers/summary";
import { SUMMARY_ROUTE } from "config/route-settings";

const router = Router();
router.get(SUMMARY_ROUTE, SummaryController.get);

export default router;
