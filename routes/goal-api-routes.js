var db = require("../models");

module.exports = function(app) {

    //collect goals for user on sign-in
    app.get('/api/goals/&user_id=:id', function(req, res) {

        // find all goals for user
        db.Goal.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function(results){
            // put all goals into an object
            var goalsObj = {
                goal: results
            };
            console.log(goalsObj.goal);
            // send object to goals.handlebars
            return res.render("goals", goalsObj)
        })

        
    });

    // CREATE GOAL WITH USER IDg
    app.post('/creategoal/:id', function(req, res) {
        console.log(req.params.id+ ': req.params.id');
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
            // redirect so goals show up on page as you add them
            res.redirect('/api/goals/&user_id=:' + req.params.id)
        })

    });













};