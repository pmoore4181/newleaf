$(document).ready(function() {

    // VARIABLES ===================================================

    // buttons =====================
    var login = $("#modalLogin");
    var signUp = $('.signUpSubmit');


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
        };

        console.log(newUserInfo);
        addNewUser(newUserInfo);


    })

    // create new user
    function addNewUser(info) {

        $.ajax({
            url: '/api/newuser',
            type: 'POST',
            data: info,
            dataType: 'json',
            success: function(data, textStatus) {
                if (data.redirect) {
                    // console.log(data.redirect);
                    window.location.href = 'http://localhost:8000' + data.redirect
                }
            }
            
        });
    }

    // redirect to goals page
    function loadGoals(info) {
        $.get('/allgoals/:id', info )
    }


    // LOGIN =======================================================

    // login existing user
    $(login).on("click", function() {

        // returning user variables ====
        var userEmail = $("#modalEmail").val();
        var userPassword = $('#modalPassword').val();

        var userInfo = {
            email: userEmail,
            password: userPassword
        };

        loginUser(userInfo);

    });





});