import { body } from "express-validator";
import { handleValidationErrors } from "../middlewares/validation.middleware";

export const validatorUserAppoinmentRequest = [
  body("name").notEmpty().withMessage("Name is required"),
  body("contact").notEmpty().withMessage("Number is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("bookingdServices").isArray().withMessage("Booking services must be an arry").notEmpty().withMessage("Services are required"),
  body("comment").notEmpty().withMessage("Comment is required"),
  body("visitingDate").notEmpty().withMessage("Visiting date is required"),
  handleValidationErrors,
];
