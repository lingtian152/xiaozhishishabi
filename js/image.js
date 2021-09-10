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