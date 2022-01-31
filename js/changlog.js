function changeline(text) {
  var htmls = [];
  var lines = text.split(/\n/);
  var tmpDiv = jQuery(document.createElement("div"));
  for (var i = 0; i < lines.length; i++) {
    htmls.push(tmpDiv.text(lines[i]).html());
  }
  return htmls.join("<br><h4><br>");
}

function loadlink() {
  $.ajax({
    url: "../log.txt",
    dataType: "text",
    async: true,
    success: function (data) {
      $("#changelog-txt").html(changeline(data));
    },
  });
}

loadlink();
setInterval(function () {
  loadlink(); // this will run after every 5 seconds
}, 5000);