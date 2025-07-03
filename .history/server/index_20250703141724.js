const express = require("express");

const app = express();

app.get("api/notes", (req, res) => {
  res.status(200).send("You got 2 notes");
});
