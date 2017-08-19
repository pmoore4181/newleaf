$(document).ready(function() {

	var submit = $("#submit-button");

	$(submit).on("click", function(){
		event.preventDefault();
		// Don't do anything if the name fields hasn't been filled out
		if (!nameInput.val().trim().trim()) {
		  return;
		}


	})

	function addNewUser() {
		$.post("/api/users"
	}

});