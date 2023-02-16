$(".nav-link").click(function(){
    var audio = new Audio("/Sound/Click.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
    audio.play();
});

$(".navbar-brand").hover(function(event){
    var sword=new Audio("/Sound/sword.mp3");
    sword.play(); //stuff to do on mouseover
    $(".navbar-brand").text("Zaid Khuroo"); //this will change the text to when hovering over the navbar brand.
});

// $(".centername").on("scroll", function () {
//     $("h1").hide();
// });

// $("h1").addClass("mouseover", function () { //on takes two parameters 1.event you're looking to listen for 2. call back function is the second parameter which will perform the action.
//     $("h1").css("color", "skyblue"); //now as the mouseover is detected on h1, it will change the color to skyblue.
  
// });
//creating a method which will keep the text erasing and typing the new string assigned in its array. It will use Typed method for this and inside the method, it will call a class or object.
var typed = new Typed(".new-text", {
    strings:[" Zaid", "a Programmer",  "a Photographer","a Stargazer ★"], //taking an array of string, which would be displayed after intervals set to the speed.
    typeSpeed:100, 
    backSpeed:100,
    loop:true //loop will never stop as the value is true for every time.
    
});
var type = new Typed(".new-era", {
    strings:[" About me"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
    
});
var types = new Typed(".new-eras", {
    strings:[" My Work"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
    
});

$(".new-text").css("color","yellow");

