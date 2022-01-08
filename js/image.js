var path = "../images";

var randomIndex = path + "/bg" + Math.floor(1 + Math.random() * 15) + ".png";
$("#body").css("background-image", `url(${randomIndex})`);
