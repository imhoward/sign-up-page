let body = document.querySelector("body");
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirmpass");

let btn = document.querySelector("button");
btn.addEventListener('click', function(e) {
    console.log(password.value);
    console.log(confirmpass.value);
    if (password.value != confirmPass.value) {
        password.style.borderColor = "red";
        confirmPass.style.borderColor = "red";
        confirmPass.setCustomValidity("Passwords do not match");
    } else {
        password.style.borderColor = "#E5E7EB";
        confirmPass.style.borderColor = "#E5E7EB";
        confirmPass.setCustomValidity("");
    }
    confirmPass.reportValidity();
});