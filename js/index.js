var img = [
    "../images/bg1.jpg",
    "../images/bg2.jpg"
];

window.onload = function(){
    var randomIndex = Math.floor(Math.random() * img.length)
    document.getElementById("body").style.background = `url(${img[randomIndex]})`
}

document.getElementById("submit").onclick = function(){
    document.getElementById("announcement").remove();
}