import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("THe server is started on port: 5001");
});
