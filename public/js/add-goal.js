$(document).ready(function() {

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var userId = getParameterByName('user_id');

	// VARIABLES ===============================================

	// buttons ===================
	var submitBtn = $("#submitBtn");
	var dayPick = $(".dayPick");

	// ADD NEW GOAL ============================================
	submitBtn.on("click", function(){

		// FORM INPUT =====================
		var newGoal = $("#newGoal").val();
		var monGoal = $("#mondayRadio").val();
		var tueGoal = $("#tuesdayRadio").val();
		var wedGoal = $("#wednesdayRadio").val();
		var thuGoal = $("#thursdayRadio").val();
		var friGoal = $("#fridayRadio").val();
		var satGoal = $("#saturdayRadio").val();
		var sunGoal = $("#sundayRadio").val();

		if (monGoal) {
			monGoal.value = 'true';
		}

		var goalObj = {
			goal_name: newGoal,
			monday: monGoal,
			tuesday: tueGoal,
			wednesday: wedGoal,
			thursday: thuGoal,
			friday: friGoal,
			saturday: satGoal,
			sunday: sunGoal
		};


		$.post('/creategoal/' + userId , goalObj)

	});

	



});