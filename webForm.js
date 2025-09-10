let firstNameWidget = document.getElementById("first");
let lastNameWidget = document.getElementById("last");
let emailInitialWidget = document.getElementById("email-init");
let emailConfirmWidget = document.getElementById("email-confirm");
let questionWidget = document.getElementById("question");
let form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    let validName = (firstNameWidget.value !== "") && (lastNameWidget.value !== "");
    let validEmail = emailInitialWidget.value === emailConfirmWidget.value;
    
    event.preventDefault()
    if (validName && validEmail) {
        localStorage.setItem("firstName", firstNameWidget.value);
        localStorage.setItem("lastName", lastNameWidget.value);
        localStorage.setItem("email", emailInitialWidget.value);
        localStorage.setItem("question", questionWidget.value);
    }
}

