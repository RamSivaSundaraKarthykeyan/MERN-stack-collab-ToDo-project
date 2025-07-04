import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Todo", "In Progress", "Done"] },
  default: "Todo",
});
