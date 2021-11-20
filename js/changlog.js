// $.get("../log.txt", function (data, item) {
//   var txt2 = $("<p></p>").text(data);

//   for (let index = 0; index < txt2.length; index++) {
//     $("#changelog-txt").append(txt2);
//   }
// });

function changeline(text) {
  var htmls = [];
  var lines = text.split(/\n/);
  // The temporary <div/> is to perform HTML entity encoding reliably.
  //
  // document.createElement() is *much* faster than jQuery('<div></div>')
  // http://stackoverflow.com/questions/268490/
  //
  // You don't need jQuery but then you need to struggle with browser
  // differences in innerText/textContent yourself
  var tmpDiv = jQuery(document.createElement("div"));
  for (var i = 0; i < lines.length; i++) {
    htmls.push(tmpDiv.text(lines[i]).html());
  }
  return htmls.join("<br>");
}

function loadlink() {
  $.ajax({
    url: "../log.txt",
    dataType: "text",
    success: function (data) {
      $("#changelog-txt").load(changeline(data));
    },
  });
}

loadlink(); // This will run on page load
setInterval(function () {
  loadlink(); // this will run after every 5 seconds
}, 5000);
