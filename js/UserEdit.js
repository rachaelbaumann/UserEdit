var url = "http://localhost8080/Users/";

$().ready(() => { // => is the annonymour funciton... look that up again.
    $("getuser").click(() => {
        getUserByPrimaryKey($("#userid").val()) //gets id out of input box
    });
    $("#save").click(() => {
        updateUser();
    });
});

function updateUser() {

}

function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey");
    $.getJSON(url + "Get/" + id)
        .then((resp) => {
            render(resp.data);
        });
}

function updateUser() {
    var id = $("#ID").val();
    var userName = $("#username").val();
    var password = $("#password").val();
    var firstMame = $("#firstname").val();
    var lastName = $("#lastname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var reviewer = $("#reviewer").val();
    var admin = $("#admin").val();

    var user = {// what is in DB : value of key  
        id: id,
        userName: username,
        password: password,
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        email: email,
        reviewer: reviewer,
        admin: admin
    }

    $.post(url + "Change", user)
        .then((resp) => {
            console.log(resp);
        });
}

function render(user) {
    $("#ID").val(user.id);
    $("#firstname").val(user.firstName);
    $("#lastname").val(user.lastName);
    $("#username").val(user.userName);
    $("#password").val(user.password);
    $("#phone").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#reviewer").prop("checked", user.reviewer);
    $("#admin").prop("checked", user.admin);
}