function loadSignOverlay(){
    return `<div id="overlay_background"></div>
    <div id="overlay_signup" class="overlay-content">
        <h2>Sign Up</h2>
        <div class="alert-success" id="signup_success">
            <p>SignUp Successful</p>
        </div>
        <div class="alert-failed" id="signup_failed">
            <p>SignUp Failed, User Already Exists</p>
        </div>
        <form id="signup_form">
            <input type="text" id="signup_name" min="1" placeholder="Name" required>
            <input type="mail" id="signup_mail" placeholder="Email" required>
            <input type="password" id="signup_pass" min="6" placeholder="Password" required>
            <input type="text" id="signup_username" min="1" placeholder="Username" required>
            <input type="tel" id="signup_mobile" min="10" placeholder="Mobile Number" required>
            <input type="text" id="signup_description" placeholder="Description">
            <button type="submit" class="btn">SignUp</button>
        </form>
    </div>
    <div id="overlay_login" class="overlay-content">
        <h2>Login</h2>
        <div class="alert-failed" id="login_failed">
            <p>Login Failed, Invalid login creadentials</p>
        </div>
        <form id="login_form">
            <input type="text" id="login_username" min="1" placeholder="Username" required>
            <input type="password" id="login_pass" placeholder="Password" required>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>`
}



export { loadSignOverlay };


    //username: nilesh1998
    //email: nilesh@gmail.com
    //pass: 123456

    //username: pinkpanther
    //email: pinkpanther@mail.com
    //pass: pink123

    //username: sinchan
    //email: sinchan@mail.com
    //pass: sinchan123

    //username: kakarot
    //email: kakarot@gmail.com
    //pass: kakarot123
