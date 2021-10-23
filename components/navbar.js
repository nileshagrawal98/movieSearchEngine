function loadNavbar(){
    return `
    <div id="nav_left_btns">
    <div >
        <button class="btn" id="home_btn">Home</button>
    </div>
</div>
    <div id="search_bar">
    <input type="text" id="movie" placeholder="Enter Movie Name To Search" />
    <div id="search_result"></div>
</div>

<div id="nav_right_btns">
    <div >
        <button class="btn" id="signup_btn">Sign Up</button>
    </div>
    <div >
        <button class="btn" id="login_btn">Login</button>
    </div>
</div>

<div id="nav_user" class="btn">
    <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" height="30px"/>
    <p id="logged_username">Nilesh</p>
</div>`
}



export { loadNavbar };