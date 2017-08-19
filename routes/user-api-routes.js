var db = require("../models");

module.exports = function(app) {

	// allow users to sign in to individual profile
    app.get('/api/users', function(req, res) {
        db.User.findOne({
        	where: {
        		user_name: req.body.user_name
        	}
            include: [db.Goal]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    })

    // create new users
    // includes user_name, email, password
    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};