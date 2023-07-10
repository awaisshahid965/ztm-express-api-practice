const express = require("express");

const app = express();

const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "User 0",
  },
  {
    id: 1,
    name: "User 1",
  },
];

app.get("/", (req, res) => {
  res.send("server running...");
});

app.get("/friends", (req, res) => {
  res.json("server running...");
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    return res.status(200).json(friend);
  }
  res.status(404).json({
    error: "friend not found...",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
