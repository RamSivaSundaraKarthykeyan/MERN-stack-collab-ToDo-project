import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
  console.log("THe server is started on port: 5001");
});
