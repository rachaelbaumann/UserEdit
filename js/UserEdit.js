var url = "http://localhost8080/Users/";

$().ready(() => { // => is the annonymour funciton... look that up again.
    $("#getuser").click(() => {
        getUserByPrimaryKey($("#userid").val()) //gets id out of input box
    });
    $("#save").click(() => {
        updateUser();
    });
});



function updateUser() {
    var ID = $("#ID").val();
    var userName = $("#username").val();
    var password = $("#password").val();
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var isReviewer = $("#reviewer").val();
    var isAdmin = $("#admin").val();

    var user = {// what is in DB : value of key  
        ID: ID,
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        isRreviewer: isReviewer,
        isAdmin: isAdmin
    }

    $.ajax(url+"Change", {
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (resp) => {
            console.log(resp)
        },
        type: 'POST'
    });
}

    $.post(url + "Change", user)
        .then((resp) => {
            console.log(resp);
        });
}

function getUserByPrimaryKey(ID) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url + "Get/" + ID)
        .then((resp) => {
            render(resp.data);
        });
}

function render(user) {
    $("#ID").val(user.ID);
    $("#firstname").val(user.firstName);
    $("#lastname").val(user.lastName);
    $("#username").val(user.userName);
    $("#password").val(user.password);
    $("#phone").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#reviewer").prop("checked", user.isReviewer);
    $("#admin").prop("checked", user.isAdmin);
}