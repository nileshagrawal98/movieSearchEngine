function setFavicon(){
    let link = document.createElement("link");
    link.rel = "icon";
    link.href = "./images/movies-tv-48.png";
    link.type = "image/x-icon";
    
    document.head.append(link);
}

export default setFavicon;