var musiciansList = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/musicians", function(req, res) {
    res.json(musiciansList);
});


app.post("/api/musicians", function(req, res) {

    var newMusician = req.body.options;

    // console.log(newMusician);

    var difference=[]

    for (var i = 0; i < musiciansList.length; i++) {

        // console.log(musiciansList[i].options)
        var sum = 0;

        // console.log( sum )
        for (var j = 0; j < musiciansList[i].options.length; j++) {
            
            // console.log(newMusician[j])

            // sum = sum + musiciansList[i].options[j];

             sum = sum + Math.abs(parseInt(newMusician[j]) - parseInt(musiciansList[i].options[j]));

        }
        difference.push({diff:sum,name:musiciansList[i].name, about:musiciansList[i].about});
        // console.log(difference);

    }             

    difference.sort(function(a, b) {return a.diff-b.diff});
    musiciansList.push(req.body)

res.json(difference[0]);

})
};