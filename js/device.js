const UA = navigator.userAgent

if (UA.device === "iphone" || "android") {
   location.replace("https://m.xiaozhishishabi.tk/")
   return false
} else {
   return true
}
