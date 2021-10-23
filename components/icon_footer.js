function setFavicon(){
    let link = document.createElement("link");
    link.rel = "icon";
    link.href = "./images/movies-tv-48.png";
    link.type = "image/x-icon";
    
    document.head.append(link);
}

function setFooter(){
    document.getElementById("page_footer").innerHTML = `<p>This page is using OMDb and TMDB API</p>`;
}

function setFont(){
    
    let link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";

    let link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com";
    
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap";

    document.head.append(link1, link2, link3);
}

export {setFavicon, setFooter, setFont};