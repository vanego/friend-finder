var surveyData = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware

        var currentUserScores = friendsData[0];

        // total difference for every friend
        var closestMatch;
        var closestMatchValue;

        // looping through all of our friends array
        for (var i = 0; i < friendsData.length; i++) {
            // set to zero so it resets every time
            var totalDifference = 0;
            // targets the scores specifically
            for (var index = 0; index < friendsData[i].scores.length; index++) {
                // finds absolute difference
                var difference = math.abs(currentUserScores[index] - friendsData[i]);
                totalDifference += difference;
            }
            if (totalDifference < closestMatchValue) {
                closestMatchValue = totalDifference;
                closestMatch = friendsData[i];
            }
        }


    });

};



