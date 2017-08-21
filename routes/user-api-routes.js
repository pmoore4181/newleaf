var db = require("../models");



module.exports = function(app) {

	// allow users to sign in to individual profile
    app.get('/user', function(req, res) {
        db.Goal.findOne({
        	where: {
        		email: req.query.email
        	}
        })
        .then(function(dbUser) {
            console.log(dbUser);
            // res.json(dbUser);
            // redirect to goals page
            // res.redirect('/usergoals/:id');

        });
        console.log(req.query);
    })

    // get goals for user
    app.get('/usergoals/:id', function(req, res){
        db.Goal.findAll({
            where: {
                userID: req.params.id
            }
        }).then(function(results){
            console.log(results)
        })
    })


    // create new users
    // includes user_name, email, password
    app.get("/api")
    app.post("/api/newuser", function(req, res) {
        db.User.create({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password
        })
        .then(function(dbUser) {
            console.log(dbUser);
            //redirect to goals page
            var user = dbUser.id;
            res.redirect('/api/goals');
        });
    });

};

















