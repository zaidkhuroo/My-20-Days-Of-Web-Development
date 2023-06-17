
var count=0;
var drumbox=document.querySelectorAll(".drum").length;

for(count=0;count<drumbox;count++)
{
//   query to add event listener on the button and adding behaviour as to get clicked  
document.querySelectorAll("button")[count].addEventListener("click", igotclicked);
}
// function to handle the behaviour of the button when clicked
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
