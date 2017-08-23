$(document).ready(function() {

    // VARIABLES ===================================================

    // url =========================
    var currentURL = window.location.href;
    var usableURL = currentURL.slice(0, -1);

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


    });

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
                    window.location.href = usableURL + data.redirect;
                }
            }

        });
    }

   


    // LOGIN =======================================================

    // login existing user
    $(login).on("click", function() {
        // console.log('Welcome Back!');
        // returning user variables ====
        var userEmail = $("#modalEmail").val();
        var userPassword = $('#modalPassword').val();

        var userInfo = {
            email: userEmail,
            password: userPassword
        };

        loginUser(userInfo);

    });

    // function to run when user logs in
    function loginUser(info) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            data: info,
            url: '/user',
            success: function(data){
                console.log(data.redirect);
                window.location.href = usableURL + data.redirect;
            }
        });
    }




});