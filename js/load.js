var load = document.getElementById("load")


if (document.readyState)
{
    setTimeout(() => {
        load.style.opacity = "0";
        setTimeout(() => {
            load.remove();
        }, 200);
    }, 2000);
}