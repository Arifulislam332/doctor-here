import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./configs/db.config";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK!👍" });
});

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Your server is runing on port ${port}`);
});
