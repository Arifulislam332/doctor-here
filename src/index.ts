import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./configs/db.config";
import appoinmentRoute from "./routers/appoinment.router";
import userRoute from "./routers/user.router";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", userRoute);
app.use("/api/user/appoinment", appoinmentRoute);

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK!👍" });
});

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
