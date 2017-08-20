$(document).ready(function() {

	var submitBtn = $("#submitBtn");

	submitBtn.on("click", addGoal());

	// show all goals
	function showAllGoals (data) {
		$.get("/allgoals", function(data){
			console.log(data);
		})
	}


	function addGoal (data) {
		$.post('/api/goal', data)
			.then(showAllGoals())
	}




})