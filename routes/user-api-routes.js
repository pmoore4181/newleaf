var db = require("../models");



module.exports = function(app) {

    // allow users to sign in to individual profile
    app.get('/user', function(req, res) {
        // search User db with email typed in
        db.User.findOne({
            where: {
                email: req.query.email
            }
        })
        .then(function(dbUser) {
            // return UserId and send to '/usergoals/:id'
            var signInId = dbUser.dataValues.id;
            res.json({redirect: '/api/goals/'});
        });
    });


    // CREATE NEW USER =========================================

    // take in form info then run search
    app.post("/api/newuser", function(req, res) {
        db.User.create({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password
        })
        .then(function(dbUser) {
            // get id from dbUser and send to '/usergoals/:id'
            var newUserId = dbUser.dataValues.id;
            res.json({redirect: "/api/goals"});

            // res.redirect('/usergoals/' + newUserId);
        });
    });


    // get goals for user 
    app.get('/usergoals/:id', function(req, res){
        db.Goal.findAll({
            // take UserId sent and search Goal db for all goals with that UserId
            where: {
                userID: req.params.id
            }
        }).then(function(results){
            console.log(results);
        })
    })

};

















