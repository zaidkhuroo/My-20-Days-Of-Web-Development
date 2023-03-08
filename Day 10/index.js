var randomNumber1 = Math.floor(Math.random() * 6) + 1; // declaring a varibale and adding math random function to it to generate the number randomly, also when multiplied with 6 it will create number from 0-5.999999, so adding math.floor function, it will generate the numbers as 0-5. At the end number 1 is added to the variable to get the result in 1-6

var randomImage = "dice" + randomNumber1 + ".png"; //adding image of dice to the var random, and then concatenating with the randomnumber varibale, so that math.random function works on it and then this will choose one picture at a time.

var randomImageSource = "image/" + randomImage; //now source is added where the 6 images are kept, concatenatig the source of image folder with the var randomimage where one of the image would be choosen to display on the screen.

var image1 = document.querySelectorAll("img")[0]; //image1 var is set to select where ever the images are kept in whole html page, making an array of images, so here the index 0 would be choosen for the first image to get operation done on.

image1.setAttribute("src", randomImageSource); //attributes of newly random image would be replace the source of original image file which is present in html page, and this would be replicated with randomized images, which will display random images among the 6 dice images.

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // declaring a varibale and adding math random function to it to generate the number randomly, also when multiplied with 6 it will create number from 0-5.999999, so adding math.floor function, it will generate the numbers as 0-5. At the end number 1 is added to the variable to get the result in 1-6

var randomImages = "dice" + randomNumber2 + ".png"; //adding image of dice to the var random, and then concatenating with the randomnumber varibale, so that math.random function works on it and then this will choose one picture at a time.

var randomImageSrc = "image/" + randomImages;//now source is added where the 6 images are kept, concatenatig the source of image folder with the var randomimage where one of the image would be choosen to display on the screen.

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc); //at first image2 var is set to select where ever the images are kept in our html page, making an array of images, so here image at index 1 would be choosen for the image to get operated on as the image at 0 index is already in use by first random function. Now set.attributes of newly random image would replace the source of original image file which is present in html page, and this would be replicated with randomized images, which will display random images among the 6 dice images, and both of these operations are appended in a single line to appended with a "." operator


// condition to check if the number of dots on dice are lesser or greater than other player's dice, and also if both the dices got same number.
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
 else{
    document.querySelector("h1").innerHTML = "Draw!";
}  
