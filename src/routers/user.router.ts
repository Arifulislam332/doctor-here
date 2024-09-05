import express, { Router } from "express";
import { createMyUser } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/", createMyUser);

export default router;
