import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    admins: { type: Schema.Types.ObjectId, ref: "User", required: true },
    members: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

boardSchema.index({ title: 1 });

const Board = mongoose.model("Board", boardSchema);
export default Board;
