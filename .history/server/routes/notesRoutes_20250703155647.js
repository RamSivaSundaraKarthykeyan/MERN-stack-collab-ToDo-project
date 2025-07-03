import express from "express";
const router = express.Router();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 2 notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note is created succesfully" });
});

app.put("/api/notes", (req, res) => {
  res.status(200).json({ message: "Note is updated" });
});

app.delete("/api/notes", (req, res) => {
  res.status(200).json({ message: "Note is deleted" });
});

app.listen(5001, () => {
  console.log("THe server is started on port: 5001");
});
