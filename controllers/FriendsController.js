const FriendsModel = require("../models/FriendsModel");

class FriendController {
  static getFriends(req, res) {
    const friends = FriendsModel.getFriends();
    res.json(friends);
  }

  static getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = FriendsModel.getFriend(friendId);

    if (friend) {
      return res.status(200).json(friend);
    }
    res.status(404).json({
      error: "friend not found...",
    });
  }

  static createFriend(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Missing friend name",
      });
    }

    const newFriend = FriendsModel.createFriend(name);
    res.status(201).json(newFriend);
  }
}

module.exports = FriendController;
