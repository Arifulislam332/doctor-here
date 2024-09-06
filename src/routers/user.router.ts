import express, { Router } from "express";
import { createMyUser } from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.post("/", jwtCheck, createMyUser);

export default router;
