var db = require("../models");

module.exports = function(app) {

    //collect goals for user on sign-in
    // app.get('/api/goals/:userid', function(req, res) {
    //     console.log('blahaaadsffdsksdfa');
    //     db.Goal.findAll({
    //         where: {
    //             UserId: req.params.userid
    //         }
    //     }).then(function(results){
    //         // res.json(results);
    //         console.log(results);

    //     })
    // });


    // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findAll({
        where: query,
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
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

    app.get('/allgoals/:id', function(req, res) {
        db.Goal.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function(results){
            console.log(results);
            var newId = results.User.dataValues.id;
            res.redirect('/api/goals');
        })
    })


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
            console.log(newGoal);
        })
        console.log(req.body);
    });













};