var db = require("../models");

module.exports = function(app) {

	// allow users to sign in to individual profile
    app.get('/api/users', function(req, res) {
        db.User.findOne({
        	where: {
        		user_name: req.body.userEmail
        	}
        }).then(function(dbUser) {
            res.render('goals', dbUser);
        });
    })


    // create new users
    // includes user_name, email, password
    app.post("/api/users", function(req, res) {
        db.User.create({
        	email: req.body.newUserEmail,
			user_name: req.body.newUserName,
			password: req.body.newUserPassword
        })
        .then(console.log(req))
    });

};