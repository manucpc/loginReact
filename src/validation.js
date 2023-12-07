var successIdentifier = true;

function validateUsername() {
    var username = document.getElementById("username").value;
    if (username !== "manu") {
        successIdentifier = false;
        window.alert("Invalid username");
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    if (password !== "manu@123") {
        successIdentifier = false;
        window.alert("Invalid password");
    }
}

function validateConfirmPassword() {
    var confirmPassword = document.getElementById("confirmPassword").value;
    var password = document.getElementById("password").value;
    if (confirmPassword !== password) {
        successIdentifier = false;
        window.alert("Passwords don't match");
    }
}

function validateAll() {
    successIdentifier = true; 
    validateUsername();
    if (successIdentifier) {
        validatePassword();
    }
    if (successIdentifier) {
        validateConfirmPassword();
    }
    if (successIdentifier) {
        window.alert("Login successful");
    }
}

export { validateAll as default, validateUsername, validatePassword, validateConfirmPassword };
