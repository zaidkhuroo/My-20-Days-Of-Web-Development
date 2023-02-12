

var userClickedPattern=[]; //1.making an empty array in which the newly  colors generated by userclickedpattern are pushed.
var buttonColors = ["red", "blue", "orange", "yellow"];
var gamepattern=[]; //making an empty array in which the random colors generated for button colors are pushed.
var level=0; //declaring a varbale level which would be set to 0.
var started = false; //11.Declaring a varibale and set as false.

  
    $("body").keypress(function (event) { //making an event handler which will invoke once any of the is pressed on the keyboard.
        if (!started) { //12. this if condition will be checked only if the started is true and will invoke statements inside it.
            $("#press-title").text("Level " + level); //the h1 will be changed to level and with the number increasing besides it.
            nextSequence(); //function would be called here again and again as the keyboard is pressed and also the h1 has to be changed.
            started = true; //as the key is already pressed once so the control would get out of the if statement and the game starts to begin.
          }
        });//writing a query which will take the whole body of html page and listening to the keypress from the keyboard which will be appended with anonymous function, in which we'll change the text of h1 to level 1 using .text method.
    

        function nextSequence() { //making a function
            userClickedPattern = [];
            level++; //here the level number would be incremented which is redirected to the handler function where the level var is used as a number.
            $("#press-title").text("Level " + level); //here the level numbers will keep increasing as long as the function nextSequence is being called.
            var randomNumber = Math.floor(Math.random() * 4);// making a varibale which will generate random number form  0-3.
            var randomColor= buttonColors[randomNumber]; //making a varible which will  store button colors randomly by using the var randomnumber in its array space.
            gamepattern.push(randomColor); //here the gamepattern will keep storing randomcolors in the array which will be displayed randomly on the screen.
            $("#" + "randomColor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomColor);
        
        }

$(".btn").click(function() { //making a click holder function which will trigger the button once clicked.
    var userChosenColor = $(this).attr("id"); //making a variable in which once the button is clicked, this varibale would be invoked and this keyword would be used which will let's choose the attribute, here we have choosed (id) which here applies on all  buttons.
    userClickedPattern.push(userChosenColor); //2. as the user clicks the button the 
    playSound(userChosenColor); //this function would be called once the button gets clicked.
    animatePress(userChosenColor);//this function gets called once the function is called,a dn the animation effect would be invoked.
    checkAnswer(userClickedPattern.length-1);

    //my logic for identifing the wrong answer.
//     if (userClickedPattern.length != gamepattern.length)
//     {
//         var audio = new Audio("sounds/wrong.mp3");
//         audio.play();
//$("#level-title").text("Game Over, Press Any Key to Restart");
//         $("body").addClass("game-over");
//             setTimeout(function () {
//                 $("body").removeClass("game-over");
//               }, 200);
//     }
 });

function checkAnswer(currentLevel){ //checkAnswer() will check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamepattern[currentLevel] === userClickedPattern[currentLevel])  //this conditon will check wether the current level game pattern is equal to user's current level pattern, if they are true then the console will print sucess otherwise it will display wrong.
    {

        console.log("success");
  //If the user got the most recent answer right, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamepattern.length){
  
            // Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
            nextSequence();
          }, 1000);
           }
        
    } else {

        console.log("wrong");
       
        playSound("wrong"); // function to play wrong sound if the wrong button gets clicked by which the red color of the screen gets displayed for 200ms
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("#press-title").text("Game Over, Reload Page to Restart");
      }
  
  }

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
   
  }

        function animatePress(currentColor)
        {
            $("#" + currentColor).addClass("pressed");
            setTimeout(function () {
                $("#" + currentColor).removeClass("pressed");
              }, 100);
           //my logic though it did not work $(".btn").addClass(".pressed").delay(100).removeClass(".pressed");
        }
    
      
    
    // $("button").on("click", function (event) { //on takes two parameters 1.event you're looking to listen for 2. call back function is the second parameter which will perform the action.
    //     $("button").hide(); //now as the mouseover is detected on h1, it will change the color to blue.
    
    // });

    