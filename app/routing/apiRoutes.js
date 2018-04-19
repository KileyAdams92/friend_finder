app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
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

app.post("/api/new", function(req, res) {
  var newFriend = req.body;

  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
