var path = "../images";

var randomIndex = path + "/bg" + Math.floor(1 + Math.random() * 8) + ".png";
$("#body").css("background", `url(${randomIndex})`);
