//Detecting button press

var drumbox = document.querySelectorAll(".drum").length;

for (var count = 0; count < drumbox; count++) {
    document.querySelectorAll(".drum")[count].addEventListener("click", function () //using query selector to select properties of drum class to and making a function to change the color of text inside the button.
    {
        //console.log(this.style.color = "white"); //applying style of color white on the button so that whenever the button is clicked/invoked the alphabet inside the button will turn it's color into white, we can do this with or without "console.log"

        //document.querySelectorAll("button")[count].addEventListener("click", butttonInnerHTML); //this function will invoke the audio for the button added inside the function igotclicked.

        var buttonInnerHTML = this.innerHTML; //invoking button clicked 
        pressMe(buttonInnerHTML); //invoking sound generating function when clicked
        animation(buttonInnerHTML); //invoking animation generating function when clicked
    });
}

//Detecting keyboard press
document.addEventListener("keypress", function (event) {

    pressMe(event.key); //invoking sound generating function when key is pressed
    animation(event.key); //invoking sound generating function when key is pressed
});

function pressMe(key) //making a function to which will detect w,a,s,d,j,k,l from keyboard and will play the sound associated with it by using switch statements which play audio associated with the keywords w,a,s,d,j,k,l.
{

    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-1.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-2.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-3.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;


        case "j":
            var audio = new Audio("sounds/tom-4.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
            audio.play();
            break;
        default:
    }
}

function animation(currentkey) //making a function which will show a shadow effect once the key is pressed. 
{
    var currentbutton = document.querySelector("." + currentkey);   //this query will select the class which are as w,a,s,d,j,k,l. and are concatenated with the current key.

    currentbutton.classList.add("pressed"); //adding the class pressed to currentbutton variable so that the pressed class would work on the button once the key is invoked.

    setTimeout(function ()  //setting timer function so that when the key is pressed, then the shadow effect will be removed after some the gap of time given to it. 
    {
        currentbutton.classList.remove("pressed");
    }, 100); //class pressed would be removed from currentbutton for 100ms to regain the orignal display of button and setting a 100 ms of gap in b.w the button pressed shadow effect to delay when the shadow is removed.

}
// function whiteColor()
// {
// var color=whiteColor
// }

// function igotclicked()
// {
// var audio=new Audio("sounds/crash.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
// audio.play();   //using function play(); with the varibale audio to play sound

// }

//my logic, though it works properly
// var count;
// for(count=0;count<=7;count++)
// document.querySelectorAll("button")[count].addEventListener("click", igotclicked);

// function igotclicked()
// {
// alert("i got clicked");
// }