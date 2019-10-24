
var friendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
    console.log(req.body)

    var newBestie = {name: "", photo: "", difference: Infinity}
    var lonelyPerson = req.body;
        // for (var i = 0; i < req.body.scores.length; i++) {
        // req.body.scores[i] = parseInt(req.body.scores[i]);
            
        // }


        for (var i = 0; i < friendData.length; i++) {
            var whoWillItBe = friendData[i];
            var diff = 0
           for (var k = 0; k < whoWillItBe.scores.length; k++) {
             diff += Math.abs(parseInt(whoWillItBe.scores[k]) - parseInt(lonelyPerson.scores[k]));
               
        }
        if (diff < newBestie.difference) {
            newBestie.name = whoWillItBe.name
            newBestie.photo = whoWillItBe.photo
            newBestie.difference = diff
        }
   }
        friendData.push(lonelyPerson);
            res.json(newBestie);

    });
}
