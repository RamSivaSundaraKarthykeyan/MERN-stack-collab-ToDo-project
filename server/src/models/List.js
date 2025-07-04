import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    order: { type: Number, required: true },
    boardId: { type: Schema.Types.ObjectId, ref: "Board", required: true },
  },
  { timeStamps: true }
);

const List = mongoose.model("List", listSchema);
export default List;
