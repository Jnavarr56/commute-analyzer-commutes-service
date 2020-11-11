import express from "express";
import ExampleRouter from "./example";
import { ROUTE_PREFIX } from "config/route-settings";

const appRouter = express.Router();
appRouter.use(ExampleRouter);

export default express().use(ROUTE_PREFIX, appRouter);
