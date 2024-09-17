import { body } from "express-validator";
import { handleValidationErrors } from "../middlewares/validation.middleware";

export const validatorUserAppoinmentRequest = [
  body("name").notEmpty().withMessage("Name is required"),
  body("contact").notEmpty().withMessage("Number is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("comment").notEmpty().withMessage("Comment is required"),
  body("bookingServices")
    .isArray()
    .withMessage("Booking services must be an arry")
    .notEmpty()
    .withMessage("Services array cannot be empty"),
  handleValidationErrors,
];
