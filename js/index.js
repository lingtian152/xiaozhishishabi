// if (document.cookie.split == "pop-card=true; expires=" + new Date(9999, 12, 13).toUTCString + "; path=/") {
//   document.getElementById("pop-card").style.display = "none";
// }

document.getElementById("close").onclick = function () {
  document.getElementById("pop-card").style.transform = "scale(0,0)";
  document.cookie =
  "pop-card=true; expires=" + new Date(9999, 12, 13).toUTCString + "; path=/";

  setTimeout(() => {
    document.getElementById("pop-card").remove();
  }, 2000);
};
