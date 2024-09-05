import express, { Router } from "express";
import { createAppoinment } from "../controllers/appoinment.controller";

const router: Router = express.Router();

router.post("/", createAppoinment);

export default router;
