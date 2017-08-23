var db = require("../models");

module.exports = function(app) {

    //collect goals for user on sign-in
    app.get('/api/goals/&user_id=:id', function(req, res) {

        db.Goal.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function(results){
            var goalsObj = {
                goals: results
            };
            console.log(results);
            return res.render("goals", goalsObj)
        })

        
    });




    // CREATE GOAL WITH USER IDg
    app.post('/creategoal/:id', function(req, res) {
        console.log(req.params.id , 'req.params.id')
        db.Goal.create({
            goal_name: req.body.goal_name,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday,
            UserId: req.params.id

        })
        .then(function(newGoal) {
            res.redirect('/api/goals/&user_id=' + req.params.id)
        })
        console.log(req.body);
    });













};