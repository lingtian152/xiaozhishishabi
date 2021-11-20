console.log("╱╱╱╭╮╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╭╮\n╱╱╱┃┃╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱┃┃\n╭━━┫╰━┳━━┳┫╰━┳┳╮╭┳┳━━┳━━┳━━━┫╰━┳┫┃\n┃━━┫╭╮┃╭╮┣┫╭╮┣╋╋╋╋┫╭╮┃╭╮┣━━┃┃╭╮┣╋╯\n┣━━┃┃┃┃╭╮┃┃╰╯┃┣╋╋┫┃╭╮┃╰╯┃┃━━┫┃┃┃┣╮\n╰━━┻╯╰┻╯╰┻┻━━┻┻╯╰┻┻╯╰┻━━┻━━━┻╯╰┻┻╯")

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('date').innerHTML = h + "时" + m + "分" + s + "秒";
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();