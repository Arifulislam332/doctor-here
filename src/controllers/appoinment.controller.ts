import { Request, Response } from "express";
import Appoinment from "../models/appoinment.model";
import mongoose from "mongoose";

export const createAppoinment = async (req: Request, res: Response) => {
  try {
    const appoinment = new Appoinment(req.body);
    appoinment.user = new mongoose.Types.ObjectId(req.userId);

    await appoinment.save();

    res.status(201).send(appoinment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something is wrong" });
  }
};
