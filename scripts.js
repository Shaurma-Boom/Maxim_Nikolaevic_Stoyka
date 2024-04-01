document.getElementById(“pizdec”).addEventListener(“click”, function() {
this.style.transform = “rotate(360deg)”;
setTimeout(function() {
this.style.transform = “”;
}.bind(this), 1000);
})
