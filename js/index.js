var img = [
    "../images/bg1.jpg",
    "../images/bg2.jpg",
    "../images/bg3.png",
    "../images/bg4.png",
    "../images/bg5.png",
    "../images/bg6.jpg"
];

window.onload = function(){
    var randomIndex = Math.floor(Math.random() * img.length)
    document.getElementById("body").style.background = `url(${img[randomIndex]})`
}

document.getElementById("close").onclick = function(){
    document.getElementById("pop-card").style.transform = "scale(0,0)";
    setTimeout(() => {
        document.getElementById("pop-card").remove();
    }, 2000);
}