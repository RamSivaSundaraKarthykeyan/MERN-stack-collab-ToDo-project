import express from "express";
import notesRoutes from "./routes/notesRoutes";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("THe server is started on port: 5001");
});
