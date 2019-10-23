// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // app.post("/api/tables", function (req, res) {
    //     if (tableData.length < 5) {
    //         tableData.push(req.body);
    //         res.json(true);
    //     }
    //     else {
    //         waitListData.push(req.body);
    //         res.json(false);
    //     }
    // });
}