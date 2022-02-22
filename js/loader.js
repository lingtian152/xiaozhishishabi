//判断浏览器
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);

//进入页面既执行函数
$( window ).on('load', function() {
  var imglist = document.querySelectorAll("img");
  for (i = 0; i < imglist.length; i++) {
    let t = imglist[i];
    if (localStorage.getItem(t.src)) {
      t.loading = true;
      Imagess(t.getAttribute("src-data"), function(obj){
        t.src = localStorage.getItem(obj.src);
      })
    } else {
      img_loading();
    }
  }
});


//判断是否加载完成
function Imagess(url, callback, error) {
  var val = url;
  var img = new Image();

  if (Browser.ie) {
    img.onreadystatechange = function () {
      if (img.readyState == "complete" || img.readyState == "loaded") {
        callback(img);
      }
    };
  } else {
    img.onload = function () {
      if (img.complete == true) {
        callback(img);
      }
    };
  }
  //如果因为网络或图片的原因发生异常，则显示该图片
  if (error) {
    img.onerror = error;
  } else {
    img.onerror = function () {
      img.src = "../icon/failed.png";
    };
  }
  img.src = val;
}

//初始化需要显示的图片，并且指定显示的位置
function img_loading() {
  var imglist = document.querySelectorAll("img");
  for (i = 0; i < imglist.length; i++) {
    let tt = imglist[i];
    //防止重复加载
    if (tt.loading == true) {
      break;
    }
    //没有该属性代表不加载
    if (!tt.getAttribute("src-data")) {
      continue;
    }
    tt.loading = true;
    tt.src = "../icon/loading.gif";
    Imagess(tt.getAttribute("src-data"), function (obj) {
      tt.src = obj.src;
      localStorage.setItem(obj.src, obj.src);
    });
  }
}