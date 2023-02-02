
var count=0;
var drumbox=document.querySelectorAll(".drum").length;

for(count=0;count<drumbox;count++)
{
document.querySelectorAll("button")[count].addEventListener("click", igotclicked);
}

function igotclicked()
{
var audio=new Audio("sounds/crash.mp3");
audio.play();   
}

//my logic, though it works properly
// var count;
// for(count=0;count<=7;count++)
// document.querySelectorAll("button")[count].addEventListener("click", igotclicked);

// function igotclicked()
// {
// alert("i got clicked");
// }