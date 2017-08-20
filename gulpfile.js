// Dependencies ================================================
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// JS Files ====================================================
var jsFiles = ['routes/*.js', 'public/js/*.js', 'models/*.js'];

// Restart server each time js files are changed and saved =====
gulp.task('serve', function(){
	var options = {
		script: 'server.js',
		delayTime: 1,
		watch: jsFiles
	}

	return nodemon(options)
		.on('restart', function(ev){
			console.log("Restarting Server...");
		});
});