import { Router } from "express";
import * as ExampleController from "controllers/example";
import { EXAMPLE_ROUTE } from "config/route-settings";

const router = Router();
router.get(EXAMPLE_ROUTE, ExampleController.get);

export default router;
