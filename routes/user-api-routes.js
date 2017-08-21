var db = require("../models");



module.exports = function(app) {

	// allow users to sign in to individual profile
    app.get('/allgoals', function(req, res) {
        db.User.findOne({
        	where: {
        		user_name: req.body.user_name
        	}
        }).then(function(dbUser) {
            console.log(dbUser);

            // var goalsObject = { 
            //     user_name: dbUser.user_name 
            // };
            // return res.render("index", goalsObject);

        });
    })



// // get route, edited to match sequelize
// router.get("/burgers", function(req, res) {
//   // replace old function with sequelize function
//   db.Burger.findAll()
//     // use promise method to pass the burgers...
//     .then(function(dbBurger) {
//       console.log(dbBurger);
//       // into the main index, updating the page
//       var hbsObject = { burger: dbBurger };
//       return res.render("index", hbsObject);
//     });
// });


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

















