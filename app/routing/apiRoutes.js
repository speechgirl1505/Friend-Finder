
var friendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
    console.log(req.body)
        for (var i = 0; i < req.body.scores.length; i++) {
        req.body.scores[i] = parseInt(req.body.scores[i]);
            
        }
    // var lonelyPerson = req.body;
        var newBestie = {name: "", photo: "", difference: 1000}

        for (var i = 0; i < friendData.length; i++) {
            var diff = 0

           for (var k = 0; k < friendData[i].scores.length; k++) {
             diff += Math.abs(friendData[i].scores[k] - parseInt(req.body.scores[k]));
               
        }
        if (diff < newBestie.difference) {
            newBestie.name = friendData[i].name
            newBestie.photo = friendData[i].photo
            newBestie.difference = diff
        }
   }
        friendData.push(req.body);
            res.json(newBestie);

    });
}

//compare every friend with the userData and then the one with the lowest difference is the new BFFF