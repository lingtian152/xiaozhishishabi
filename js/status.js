function readTextFile(file) {
  var rawfile = new XMLHttpRequest();
  rawfile.open("GET", file, false);
  rawfile.onreadystatechange = function () {
    if (rawfile.readyState === 4) {
      if (rawfile.status === 200 || rawfile.status === 0) {
        var allText = rawfile.responseText;
        document.getElementById("label").innerHTML = allText;
      }
    }
  };
  rawfile.send(null);
}

while (true)
{
setTimeOut(function(){
readTextFile("../status.txt");
}, 2000);
}
