var musiciansList = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/musicians", function(req, res) {
    res.json(musiciansList);
});


app.post("/api/musicians", function(req, res) {

    musiciansList.push(req.body)
    res.json(true);


    for (var i = 0; i < musiciansList.length; i++) {

        // console.log(musiciansList[i])
        var sum = 0;
        for (var j = 2; j < musiciansList[i].length; j++) {

            var sum = sum += musiciansList[i][j];
            
        }

    }             
    // console.log(musiciansList[0][j])
    console.log(sum)

res.json();   //whatever i am sending goes inside json(). 

})
};