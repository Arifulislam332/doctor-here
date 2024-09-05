import mongoose from "mongoose";

const appoinmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    contact: {
      type: String,
    },
    address: {
      type: String,
    },
    bookedServices: [
      {
        type: String,
      },
    ],
    comment: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Appoinment = mongoose.model("Appoinment", appoinmentSchema);

export default Appoinment;
