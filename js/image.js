var img = [
    "../images/bg1.png",
    "../images/bg2.png",
    "../images/bg3.png",
    "../images/bg4.png",
    "../images/bg5.png",
    "../images/bg6.png",
    "../images/bg7.png",
    "../images/bg8.png"
];


window.onload = function(){
    var randomIndex = Math.floor(Math.random() * img.length)
    document.getElementById("body").style.background = `url(${img[randomIndex]})`
}
