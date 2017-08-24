// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // send user to login page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // send to goals page
  // app.get('/api/goals/:id', function(req, res) {
  // 	res.render("goals");
  // });

};
