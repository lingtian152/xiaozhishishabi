if ($.cookie("pop-card") == null) {
  $("#close").click(function () {
    $.cookie("pop-card", "true", {expires: 7});
    $(".pop-card").css({
      '-webkit-transform' : 'scale(0, 0)',
      '-moz-transform'    : 'scale(0, 0)',
      '-ms-transform'     : 'scale(0, 0)',
      '-o-transform'      : 'scale(0, 0)',
      'transform'         : 'scale(0, 0)'
    });
    setTimeout(() => {
      $("#pop-card").remove();
    }, 2500);
  });
} else {
  $("#pop-card").remove();
}