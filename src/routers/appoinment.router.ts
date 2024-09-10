import express, { Router } from "express";
import { createAppoinment } from "../controllers/appoinment.controller";
import { jwtCheck } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.post("/", jwtCheck, createAppoinment);

export default router;
