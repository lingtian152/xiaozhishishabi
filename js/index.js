if ($.cookie("pop-card") == null) {
  $("#close").click(function () {
    $.cookie("pop-card", "true", {expires: 7});
    $("#pop-card").fadeOut();
    setTimeout(() => {
      $("#pop-card").remove();
    }, 5000);
  });
} else {
  $("#pop-card").remove();
}