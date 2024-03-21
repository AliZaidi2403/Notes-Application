const dotenv = require("dotenv");
const express = require("express");
const notes = require("./data/notes");
const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running at port 5000");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((e) => e._id === req.params.id);
  res.send(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listenning at port ${PORT}`);
});
