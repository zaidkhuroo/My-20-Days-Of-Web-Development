var simon=$("button").length;
var buttonColors = ["red", "blue", "orange", "yellow"];
var randomColor= buttonColors[randomNumber];
var gamepattern=[];
gamepattern.push(randomColor);
 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

}


$("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

for(var i=0;i<=simon;i++)
{
$("#green").on("click", function () { 
var audio = new Audio('sounds/green.mp3');
audio.play();
});
$("#blue").on("click", function () { 
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    });
    $("#yellow").on("click", function () { 
        var audio = new Audio('sounds/yellow.mp3');
        audio.play();
        });
        $("#red").on("click", function () { 
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            });

        }            // your logic, not inserted yet.
//$("body").keypress(function (event) {
    //     $("h1").text("Level 1");
    // }); //writing a query which will take the whole body of html page and listening to the keypress from the keyboard which will be appended with anonymous function, in which we'll change the text of h1 to level 1 using .text method.
    
    
    // $("button").on("click", function (event) { //on takes two parameters 1.event you're looking to listen for 2. call back function is the second parameter which will perform the action.
    //     $("button").hide(); //now as the mouseover is detected on h1, it will change the color to blue.
    
    // });

    