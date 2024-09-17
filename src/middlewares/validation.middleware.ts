import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  next();
};
