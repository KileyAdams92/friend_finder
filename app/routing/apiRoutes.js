var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.get("/api/friends/:friend?", function(req, res) {
    var chosen = req.params.friends;

    if (chosen) {
      console.log(chosen);

      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.scores = Array.of(newFriend.scores);
    var winningFriend;
    var lowestScore = 100;
    function add(a, b) {
      return parseInt(a) + parseInt(b);
    }
    for (var i = 0; i < friends.length; i++) {
      var friendScore = friends[i].scores.reduce(add, 0);
      var newFriendScore = Array.from(newFriend.scores).reduce(add, 0);
      var scoreDiff = friendScore - newFriendScore;
      if (scoreDiff < lowestScore && newFriend.name !== friends[i].name) {
        lowestScore = scoreDiff;
        newFriend.winningFriend = friends[i];
      }
    }
    console.log(
      newFriend.name +
        "'s " +
        "friend match is : " +
        newFriend.winningFriend.name
    );

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log("Newly added friend: " + newFriend.name);

    friends.push(newFriend);

    res.json(newFriend);
  });
};
