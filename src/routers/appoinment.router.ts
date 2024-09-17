import express, { Router } from "express";
import { createAppoinment } from "../controllers/appoinment.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import { validatorUserAppoinmentRequest } from "../dto/appoinment.dto";

const router: Router = express.Router();

router.post(
  "/",
  validatorUserAppoinmentRequest,
  jwtCheck,
  jwtParse,
  createAppoinment
);

export default router;
