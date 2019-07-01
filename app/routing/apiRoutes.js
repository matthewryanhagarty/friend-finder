var musiciansList = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/musicians", function(req, res) {
    res.json(musiciansList);
});


app.post("/api/musicians", function(req, res) {

    musiciansList.push(req.body);


    for (var i = 0; i < musiciansList.length; i++) {

        // console.log(musiciansList[i])



        console.log(musiciansList[i].mcdonalds)

        // for (var j = 2; j < items; j++) {

            // console.log(items, sub)

        // }
    }

res.json();   //whatever i am sending goes inside json(). 

})
};