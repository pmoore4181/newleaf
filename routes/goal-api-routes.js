var db = require("../models");

module.exports = function(app) {

    //collect goals for user on sign-in
    app.get('/api/goal/:userid', function(req, res) {
        db.Goal.findAll({
            where: {
                UserId: req.params.userid
            },
            include: [db.Goal]
        }).then(function(results){
            res.json(results);
        })
    });

    // get info for individual goal and show on page so user can edit/update goal
    app.get('/api/goal', function(req, res) {
        db.Goal.findOne({
            where: {
                goal_ID: req.body.goal_ID 
            }
        }).then(function(singleGoal) {
            res.json(singleGoal)
        })
    });


    // post edited/updated goal to db
    app.post('/creategoal', function(req, res) {
        db.Goal.create({
            goal_name: req.body.goal_name,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday
        })
        .then(function(newGoal) {
            console.log(newGoal);
        })
        console.log(req.body);
    });

};