$(document).ready(function () {
  if ($.cookie("pop-card")) {
    $("#pop-card").remove();
  }
});

$("#close").click(function () {
  $("#pop-card").css("transform", "scale(0,0)");
  $.cookie("pop-card", "true", { expires: 7 });
  setTimeout(() => {
    $("#pop-card").remove();
  }, 500);
});