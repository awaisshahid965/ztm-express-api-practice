const defaultFriendsData = [
  {
    id: 0,
    name: "User 0",
  },
  {
    id: 1,
    name: "User 1",
  },
];

class FriendsModel {
  static friends = [...defaultFriendsData];

  static createFriend(friendName) {
    const newFriend = {
      name: friendName,
      id: this.friends.length,
    };
    this.friends.push(newFriend);
    return newFriend;
  }

  static getFriend(id) {
    return this.friends[id];
  }

  static getFriends() {
    return this.friends;
  }
}

module.exports = FriendsModel;
