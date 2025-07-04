import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema({
  actionType: {
    type: String,
    enum: ["add", "edit", "delete", "assign", "drag"],
    required: true,
  },
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: "true" },
  performedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: { type: Date, default: Date.now } },
  meta: { type: Schema.Types.Mixed },
});
