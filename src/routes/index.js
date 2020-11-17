import express from "express";
import SummaryRouter from "./summary";
import { ROUTE_PREFIX } from "config/route-settings";

const appRouter = express.Router();
appRouter.use(SummaryRouter);

export default express().use(ROUTE_PREFIX, appRouter);
