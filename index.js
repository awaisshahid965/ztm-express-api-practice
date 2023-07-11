const express = require("express");
const FriendController = require("./controllers/FriendsController");

const app = express();

const PORT = 3000;

// middlewares
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const timeToProcessRequest = Date.now() - start;
  console.log(`${req.method} ${req.url} ${timeToProcessRequest}ms`);
});

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("server running...");
});

app.post("/friends", FriendController.createFriend);
app.get("/friends", FriendController.getFriends);
app.get("/friends/:friendId", FriendController.getFriend);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
