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

  // opens page with list of goals. Will be filled with info of each user's goals
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index1.html"));
  });


  // send to personal page
  app.get('/goals', function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/goals.html"))
  })

};
