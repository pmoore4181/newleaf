$(document).ready(function() {

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

		addNewGoal(goalObj);

	});

	function addNewGoal(info) {

		$.post('/creategoal', info);

	}


});