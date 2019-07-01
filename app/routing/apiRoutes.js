var musiciansList = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/musicians", function(req, res) {
    res.json(musiciansList);
});

app.post("/api/musicians", function(req, res) {

    musiciansList.push(req.body);
    res.json(true); 

})
};