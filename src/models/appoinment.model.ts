import mongoose from "mongoose";

const appoinmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bookingdServices: [
      {
        type: String,
        required: true,
      },
    ],
    comment: {
      type: String,
      required: true,
    },
    visitingDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Appoinment = mongoose.model("Appoinment", appoinmentSchema);

export default Appoinment;
