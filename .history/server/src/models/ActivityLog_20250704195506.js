import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema({
  actionType: {
    type: String,
    enum: ["add", "edit", "delete", "assign", "drag"],
    required: true,
  },
});
