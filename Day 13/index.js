//jQuery uses methods and functions to work on javscript
$("h1").addClass("big-boss"); //instead of using document.queryselector, we use $. Also big-boss here is the name of the class, by adding class here would apply the styles of css class on h1
$("h1").addClass("big-boss margin-20"); //adding margin-20 class on h1(multiple class)
$("h1").text("change me"); //.txt will change the text of the h1
$("button").html("<em>don't</em>"); //.html will replace the need of wrting of inner.html.

//mainuplating attributes
$("a").attr("href", "https://www.yahoo.com"); //by using .attr and inserting href at first and an anchor link to other side will modify the anchor tag and thus replacing it with this anchor tag link, which is yahoo.

// adding event listeners to javascripts using jQuery
$("body").keypress(function (event) {
    $("h1").text(event.key);
});

//second method 
$("h1").on("mouseover", function () { //on takes two parameters 1.event you're looking to listen for 2. call back function is the second parameter which will perform the action.
    $("h1").css("color", "blue"); //now as the mouseover is detected on h1, it will change the color to blue.

});

//adding and removing elements with jquery


//website animations with jquery
$("button").on("click", function () {
    $("h1").hide();
});


$("button").on("click", function () {
    $("h1").animate({ margin: "20%" }); // .animate takes two parameters inside the paranthesis under curly braces, and the first once is the property name and the secnond one should be a number.   
});

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: "20%" }); //chaining three methods together.

});

//adding elemnts in a webpage using jquery
$("h1").before("<button>New</button>"); //this will make the new button before the h1 at the top of it
$("h1").after("<button>New</button>"); //this will make the new button after the h1 at the bottom of it.
$("h1").append("<button>New</button>"); //this will make the new button after the content of the h1 at the right side of h1.
$("h1").prepend("<button>New</button>"); //this will make the new button before the content of the h1 at the left side of h1.

//removing elements in a webpage using jquery
// $("button").remove(); //this will remove every button in the webpage.