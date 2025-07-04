import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },   // Trim is used to remove and unwanted blank spaces in the front and back.
  description: { type: String },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Todo", "In Progress", "Done"]    // enum will make sure that only the strings such as Todo, In Process, Done are accepted
    default: "Todo",},
  
});
