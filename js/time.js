function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var y = today.getFullYear();
  var mo = today.getMonth();
  var d = today.getDay();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('date').innerHTML = y + "年" + mo + "月"+ d + "天" + h + "时" + m + "分" + s + "秒";
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();