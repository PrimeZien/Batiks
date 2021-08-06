var nameText = "name-text";
var emailText = "email-text";
var subjectText = "subject-text";
var messageText = "message-text";

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var isFormCompleted = 1;

    if (name === "") {
        document.getElementById("name-text").style.display = "block";
        isFormCompleted = 0;
    }

    if (email === "") {
        document.getElementById("email-text").style.display = "block";
        isFormCompleted = 0;
    }

    if (subject === "") {
        document.getElementById("subject-text").style.display = "block";
        isFormCompleted = 0;
    }

    if (message === "") {
        document.getElementById("message-text").style.display = "block";
        isFormCompleted = 0;
    }

    if (isFormCompleted) {
        confirm("Thank You for Your Valuable Feedback!");
        location.reload();
    }

}

function resetField(field) {
    document.getElementById(field).style.display = "none";
}