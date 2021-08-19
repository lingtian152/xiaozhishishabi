var changelogtext = document.getElementById("changelog-text");

function readfile(path, text) {
  changelogtext.innerHTML = text;
}

setTimeout(() => {
  readfile("../changelog.txt", null);
}, 2000);
