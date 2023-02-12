$(".nav-link").click(function(){
    var audio = new Audio("/Sound/Click.mp3"); //making a varibale of audio and setting path of the sounds where the audio file is placed.
    audio.play();
});

$(".navbar-brand").hover(function(event){
    var sword=new Audio("/Sound/sword.mp3");
    sword.play(); //stuff to do on mouseover
});
