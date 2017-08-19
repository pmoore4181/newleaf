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

	 //  // A function for creating an author. Calls getAuthors upon completion
  // function upsertAuthor(authorData) {
  //   $.post("/api/authors", authorData)
  //     .then(getAuthors);
  // }


})