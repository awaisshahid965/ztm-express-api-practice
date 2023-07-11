const FriendController = require("../controllers/FriendsController");

const friendsRouter = require("express").Router();

friendsRouter.post("/", FriendController.createFriend);
friendsRouter.get("/", FriendController.getFriends);
friendsRouter.get("/:friendId", FriendController.getFriend);

module.exports = friendsRouter;
