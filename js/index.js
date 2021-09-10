document.getElementById("close").onclick = function(){
    document.getElementById("pop-card").style.transform = "scale(0,0)";
    setTimeout(() => {
        document.getElementById("pop-card").remove();
    }, 2000);
}