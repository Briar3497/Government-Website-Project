let emailInitialWidget = document.getElementById("email-init");
let emailConfirmWidget = document.getElementById("email-confirm");
let form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    let validEmail = emailInitialWidget.value === emailConfirmWidget.value;
    
    if (!validEmail) {
        event.preventDefault();
        window.alert("Emails do not match");
    }
}
