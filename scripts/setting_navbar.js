function showSearchResult(data) {

    let results = document.getElementById("search_result");

    results.innerHTML = "";

    // console.log(data);

    results.style.display = "block";

    data.forEach(e => {
        let container = document.createElement("div");


        container.onclick = function () {
            requestDataForTitle(e.imdbID);
        }

        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = e.Poster;

        div1.append(image);

        let div2 = document.createElement("div");

        let name = document.createElement("p")
        name.innerText = e.Title;

        let type = document.createElement("p");
        type.innerText = e.Type;

        div2.append(name, type);

        container.append(div1, div2);

        results.append(container);

    })

}

async function requestDataForSearch() {
    let movie = document.getElementById("movie").value;

    // console.log(movie);

    try {

        let res = await fetch(`http://www.omdbapi.com/?apikey=ce0b3791&s=${movie}`);
        let data = await res.json();

        showSearchResult(data.Search);

    } catch (e) {
        // console.log(e);
        let results = document.getElementById("search_result");

        results.innerHTML = "";

        let p = document.createElement("p");
        p.innerText = "No results found";
        p.style.textAlign = "center";
        results.append(p);
    }

}

function removeResults() {
    setTimeout(function () {
        let results = document.getElementById("search_result");
        results.innerHTML = "";
        results.style.display = "none";
        document.getElementById("movie").value = "";
    }, 200)
}

function setNavbar() {
    let movie_input = document.getElementById("movie");
    movie_input.addEventListener("input", searchMovie);
    movie_input.addEventListener("blur", removeResults);

    document.getElementById("signup_btn").addEventListener("click", () => {showOverlay('signup')});

    document.getElementById("login_btn").addEventListener("click", () => {showOverlay('login')});

    document.getElementById("home_btn").addEventListener("click", () => {window.location.href = "index.html"});


}

let timer;

function searchMovie() {
    clearTimeout(timer);

    timer = setTimeout(function () {
        requestDataForSearch()
    }, 600);
}

function showOverlay(t) {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    if (t == "signup") {
        document.getElementById("overlay_signup").style.display = "block";
        document.getElementById("overlay_login").style.display = "none";
    } else if (t == "login") {
        document.getElementById("overlay_signup").style.display = "none";
        document.getElementById("overlay_login").style.display = "block";
    }
    overlay.onscroll
}

async function requestDataForTitle(movie_id) {

    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=ce0b3791&i=${movie_id}`);

        let data = await res.json();
        // console.log(data);

        showMovie(data);
    } catch (e) {
        // console.log(e);
        showError(movie);

    }

    document.getElementById("movie_area").style.display = "block";
}

function showMovie(data) {

    let movie_area = document.getElementById("movie_area");
    movie_area.innerHTML = "";

    let container = document.createElement("div");

    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = data.Poster;

    div1.append(image);

    let div2 = document.createElement("div");
    div2.id = "details";

    let date = document.createElement("p");
    date.innerText = "Released Date: " + data.Released;

    let title = document.createElement("p");
    title.innerText = data.Title;

    if (Number(data.imdbRating) > 8.5) {
        let span = document.createElement("span");
        span.innerText = "Recommended";
        title.append(span);
    }

    let imdb = document.createElement("p");
    imdb.innerText = "IMDb Rating: " + data.imdbRating;

    let plot = document.createElement("p");
    plot.innerText = "Plot: " + data.Plot;


    let actors = document.createElement("p");
    actors.innerText = "Actors: " + data.Actors;

    let rating = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = "Ratings: "
    rating.append(h4);
    let rating_data = data.Ratings;
    rating_data.forEach(e => {
        let div = document.createElement("div");
        let source = document.createElement("p");
        source.innerText = e.Source + ": ";
        let value = document.createElement("p");
        value.innerText = e.Value;
        div.append(source, value);
        rating.append(div);
    });

    div2.append(title, date, imdb, plot, actors, rating);

    container.append(div1, div2);

    movie_area.append(container);
}

function showError(movie) {
    let movie_area = document.getElementById("movie_area");
    movie_area.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.innerText = `'${movie}' Not Found!`
    h2.style.textAlign = "center";
    h2.style.color = "white";

    let img = document.createElement("img");
    img.src = "http://driveinstyle.lk/img/img_gif/no_result_found.gif";

    movie_area.append(h2, img);
}


export { showSearchResult, requestDataForSearch, removeResults, setNavbar, searchMovie, showOverlay, requestDataForTitle, showMovie, showError};