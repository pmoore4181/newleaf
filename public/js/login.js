$(document).ready(function() {

    // VARIABLES ===================================================

    // buttons =====================
    var login = $("#modalLogin");
    var signUp = $('.signUpSubmit')



    // returning user variables ====
    var userEmail = $("#modalEmail").val();
    var userPassword = $('#modalPassword').val();

    // ADD NEW USER ================================================

    // create new user
    $(signUp).on("click", function() {
        console.log('submit pressed');

        // new user variables ==========
        var newUserName = $("#newUserName").val();
        var newUserEmail = $('#newUserEmail').val();
        var newUserPassword = $('#newUserPassword').val();

        var newUserInfo = {
            email: newUserEmail,
            user_name: newUserName,
            password: newUserPassword
        }

        console.log(newUserInfo);
        addNewUser(newUserInfo);


    })

    // create new user
    function addNewUser(info) {

        $.post('/api/newuser', info);

    }


    // LOGIN =======================================================

    // login existing user
    $(login).on("click", function() {
        event.preventDefault();

        loginUser();

    })


    // function to run when user logs in
    function loginUser() {

        // Don't do anything if the name fields hasn't been filled out
        if (!userEmail || !userPassword) {
            return;
        }

        $.get('/api/users', function(req, res) {


        })

    }


});