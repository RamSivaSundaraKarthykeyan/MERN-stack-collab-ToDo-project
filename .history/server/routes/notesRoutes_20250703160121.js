import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("You got 2 notes");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Note is created succesfully" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note is updated" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Note is deleted" });
});

export default router;
