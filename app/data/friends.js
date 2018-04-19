var people = [
  {
    name: "Ebba",
    photo: "https://photos.app.goo.gl/jKg8Fzb3MPqwbFWv1",
    scores: ["5", "3", "2", "1", "5", "5", "1", "3", "3", "1"]
  },
  {
    name: "Snoopy",
    photo: "https://photos.app.goo.gl/7WJmeVLMmpnf5foP2",
    scores: ["2", "4", "1", "4", "2", "5", "1", "4", "1", "3"]
  },
  {
    name: "Clyde",
    photo: "https://photos.app.goo.gl/LjBpMSksi8AQxJE33",
    scores: ["5", "4", "4", "3", "2", "5", "3", "3", "1", "5"]
  }
];

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newFriend = {
    name: $("#newFriendName")
      .val()
      .trim(),
    photo: $("#newPhotoLink")
      .val()
      .trim(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  $.post("/api/new", newFriend).then(function(data) {
    console.log(data);
  });
});
