const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 2 notes");
});

app.listen(5001, () => {
  console.log("THe server is started on port: 5001");
});
