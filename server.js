const express = require("express");
const app = express();
const PORT = 8000;

const jokes = {
  1: {
    "Why do servers make good partners?": "All they do is listen.",
  },
};
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`The server is now running on ${PORT}!`);
});
