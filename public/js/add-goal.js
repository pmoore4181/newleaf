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

	$('#sundaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		   else {
		      $(this).val("false");
		   }
		console.log($('#sundaycheckbox').val());
	});
	$('#mondaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#mondaycheckbox').val());
	});
	$('#tuesdaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#tuesdaycheckbox').val());
	});
	$('#wednesdaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#wednesdaycheckbox').val());
	});
	$('#thursdaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#thursdaycheckbox').val());
	});
	$('#fridaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#fridaycheckbox').val());
	});
	$('#saturdaycheckbox').on("click", function(){
		if ($(this).val() == "false") {
		      $(this).val("true");
		   }
		else {
		    $(this).val("false");
		}
		console.log($('#saturdaycheckbox').val());
	});

	

	// buttons ===================
	var submitBtn = $("#submitBtn");
	var dayPick = $(".dayPick");

	// ADD NEW GOAL ============================================
	submitBtn.on("click", function(){

		// FORM INPUT =====================
		var newGoal = $("#newGoal").val();
		var monGoal = $("#mondaycheckbox").val();
		var tueGoal = $("#tuesdaycheckbox").val();
		var wedGoal = $("#wednesdaycheckbox").val();
		var thuGoal = $("#thursdaycheckbox").val();
		var friGoal = $("#fridaycheckbox").val();
		var satGoal = $("#saturdaycheckbox").val();
		var sunGoal = $("#sundaycheckbox").val();

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

			$.post('/creategoal/' + userId , goalObj);
			location.reload();

	});

	



});