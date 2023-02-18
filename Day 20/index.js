
// my logic but ot working yet
// var prev = $('#prev').attr('id');
// var next = $('#next').attr('id');
// var thumbnails = $(".thumbnail");
//var focus=$('#focus').attr('id');
// var imageSlider = new Array(
//     "images/bg1.png",
//     "images/bg2.png",
//     "images/bg3.png",
//     "images/bg4.png",
//     "images/bg5.png",
// );
// $("next").click(function () {
//     var i = 0;
//     focus.style.imageSlider = 'url("' + imageSlider[i + 1] + '")';
//     i++;
// });

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var focus = document.getElementById("focus");

var imageSlider = new Array(
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
);
let i = 0;
next.onclick = function () {
    if (i < 4) {

        focus.style.backgroundImage = 'url("' + imageSlider[i + 1] + '")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function () {
    if (i > 0) {

        focus.style.backgroundImage = 'url("' + imageSlider[i - 1] + '")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}

