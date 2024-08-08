function saveuser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
}

function validateUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users"));
    return users && users[username] === password;
}

document.getElementById("loginbutton").addEventListener('click', function() {
    document.getElementById("loginform").classList.remove("hidden");
    document.getElementById("signupform").classList.add("hidden");
    document.getElementById("loginalert").textContent = '';
    document.getElementById("signupalert").textContent = '';
    document.getElementById("loginalert").classList.add("d-none");
    document.getElementById("signupalert").classList.add("d-none");
    document.getElementById("loginbutton").classList.add("hidden")
    document.getElementById("signupbutton").classList.remove("hidden")
});

document.getElementById("signupbutton").addEventListener('click', function() {
    document.getElementById("loginform").classList.add("hidden");
    document.getElementById("signupform").classList.remove("hidden");
    document.getElementById("loginalert").textContent = '';
    document.getElementById("signupalert").textContent = '';
    document.getElementById("loginalert").classList.add("d-none");
    document.getElementById("signupalert").classList.add("d-none");
    document.getElementById("signupbutton").classList.add("hidden")
    document.getElementById("loginbutton").classList.remove("hidden")
});

document.getElementById("signup").addEventListener('click', function() {
    let username = document.getElementById("signupusername").value;
    let password = document.getElementById("signuppassword").value;
    let message = document.getElementById("signupalert");
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (username && password) {
        if (users[username]) {
            message.textContent = "Username already exists";
            message.classList.add("alert", "alert-warning");
            message.classList.remove("d-none");
        } else {
            saveuser(username, password);
            message.textContent = "Account created successfully";
            message.classList.remove("alert-warning");
            message.classList.add("alert", "alert-success");
            message.classList.remove("d-none");
        }
    } else {
        message.textContent = "Please enter both username and password";
        message.classList.add("alert", "alert-danger");
        message.classList.remove("d-none");
    }
});

document.getElementById("login").addEventListener("click", function() {
    const username = document.getElementById("loginusername").value;
    const password = document.getElementById("loginpassword").value;
    const message = document.getElementById("loginalert");
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (username && password) {
        if (validateUser(username, password)) {
            localStorage.setItem('loggedinuser', username);
            window.location.href = "e-commerce.html"; // Redirect to the desired page
        } else {
            message.textContent = "Invalid username or password";
            message.classList.add("alert", "alert-danger");
            message.classList.remove("d-none");
        }
    } else {
        message.textContent = "Please enter both username and password";
        message.classList.add("alert", "alert-danger");
        message.classList.remove("d-none");
    }
});
