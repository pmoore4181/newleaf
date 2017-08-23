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
            // return UserId and send to '/api/goals/&user_id=:id'
            var signInId = dbUser.dataValues.id;
            res.json({redirect: '/api/goals/&user_id=' + signInId})
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
            // get id from dbUser
            var newUserId = dbUser.dataValues.id;

            res.json({redirect: "/api/goals/&user_id=" + newUserId});

            // once on goals.html, search for goals according to user id
            db.User.findAll({
                where: {
                    id: newUserId
                }
            }).then(function(results) {
                console.log(results);
            })

        })
    });



};

















