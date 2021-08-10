function readTextFile(file) {
  var rawfile = new XMLHttpRequest();
  rawfile.open("GET", file, false);
  rawfile.onreadystatechange = function () {
    if (rawfile.readyState === 4) {
      if (rawfile.status === 200 || rawfile.status === 0) {
        var allText = rawfile.responseText;
        document.getElementById("announcement").onload = function () {
          document.getElementById("label").innerHTML = allText;
        };
      }
    }
  };
  rawfile.send(null);
}

addEventListener("change", () => {
  readTextFile("../status.txt");
});
