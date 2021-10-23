function setSignOverlay(){
    document.getElementById("overlay_background").addEventListener("click", () => {closeOverlay()});

    document.getElementById("signup_form").addEventListener("submit", () => {SignUp(event)});

    document.getElementById("login_form").addEventListener("submit", () => {Login(event)});
}

async function SignUp(e) {
    e.preventDefault();

    let form = document.getElementById("signup_form");

    let details = {
        name: form.signup_name.value,
        email: form.signup_mail.value,
        password: form.signup_pass.value,
        username: form.signup_username.value,
        mobile: form.signup_mobile.value,
        description: form.signup_description.value,
    }

    // console.log(details);

    details = JSON.stringify(details);

    try {
        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: "POST",
            body: details,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();

        if (data.error) {
            showSignUpFailed();
        } else {
            showSignUpSuccessful();
        }

    } catch (e) {
        // console.log(e);
    }

}

async function Login(e) {
    e.preventDefault();

    document.getElementById("login_failed").style.display = "none";

    let form = document.getElementById("login_form");

    let details = {
        password: form.login_pass.value,
        username: form.login_username.value,
    }

    // console.log(details);

    details = JSON.stringify(details);

    try {
        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: details,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();

        console.log(data);

        if (data.error) {
            showLoginFailed();
        } else {
            fetchUserData(form.login_username.value, data.token);
        }

    } catch (e) {
        // console.log(e);
    }

}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function showSignUpFailed() {
    // alert("failed");
    document.getElementById("signup_failed").style.display = "block";
    document.getElementById("signup_success").style.display = "none";
}

function showSignUpSuccessful() {
    // alert("success");
    document.getElementById("signup_failed").style.display = "none";
    document.getElementById("signup_success").style.display = "block";
    setTimeout(() => {closeOverlay()}, 500) ;
}

async function fetchUserData(username, token) {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            'Content-Type': 'application/json',

            Authorization: `Bearer ${token}`,
        },
    });

    let data = await res.json();

    // console.log(data);

    showLoggedUser(data);
}

function showLoginFailed() {
    document.getElementById("login_failed").style.display = "block";
}

function showLoggedUser(data) {
    let nav_user = document.getElementById("nav_user");
    nav_user.querySelector("#logged_username").innerText = data.username;
    nav_user.style.display = "flex";

    document.getElementById("nav_right_btns").style.display = "none";

    closeOverlay();
}

export { setSignOverlay, SignUp, Login, closeOverlay, showSignUpFailed, showSignUpSuccessful, fetchUserData, showLoginFailed, showLoggedUser };