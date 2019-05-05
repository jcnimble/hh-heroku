
var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      image: "",
      friendDifference: 1000
    };
    var newFriend = req.body;
    var newFriendName = newFriend.friendName;
    var newFriendScore = newFriend.score;

    var b = newFriendScore.map(function (item) {
      return parseInt(item, 10);
    });

    newFriend = {
      name: newFriendName,
      photo: newFriend.friendImage,
      score: b
    };
    console.log("1) Name" + newFriendName);
    console.log("2) User score" + newFriendScore);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("3) Some of users score" + sum);
    console.log("4) Best match friend diff" + bestMatch.friendDifference);
    console.log("+++++++++++++++++++++++++++++++++++++++++++");

    for (var i = 0; i < friendData.length; i++) {
      console.log("5a) " + friendData[i].friendName);
      totalDifference = 0;
      console.log("5b) Total Diff" + totalDifference);
      console.log("6) Best match friend diff" + bestMatch.friendDifference);

      var bFriendScore = friendData[i].score.reduce((a, b) => a + b, 0);
      console.log("7) Total friend score" + bFriendScore);
      totalDifference += Math.abs(sum - bFriendScore);
      console.log("+++++++++++++++++++++++++++++++++++++++" + totalDifference);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friendData[i].friendName;
        bestMatch.image = friendData[i].friendImageir ;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference = "Total Difference");
    }
    console.log(bestMatch);
    friendData.push(newFriend);
    console.log("8) New User Added");
    console.log(newFriend);
    res.json(bestMatch);
  });
};

