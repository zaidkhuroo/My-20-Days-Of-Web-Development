$(".nav-link").click(function(){
    var audio = new Audio("/Sound/Click.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
    audio.play();
});

$(".navbar-brand").hover(function(event){
    var sword=new Audio("/Sound/sword.mp3");
    sword.play(); //stuff to do on mouseover
});
// $("h1").addClass("bigB");
// $("h1").on("mouseover", function () { //on takes two parameters 1.event you're looking to listen for 2. call back function is the second parameter which will perform the action.
//     $("h1").css("color", "skyblue"); //now as the mouseover is detected on h1, it will change the color to skyblue.
  
// });
var typed = new Typed(".new-text", {
    strings:[" Zaid", "a Programmer",  "a Photographer","a Stargazer ★"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
    
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
// changing the color of main text using jquery.
$(".new-text").css("color","yellow");
$(".navbar-brand").text("Zaid");
