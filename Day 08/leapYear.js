// adding varibale in javascript which will display enter year    
var a=prompt("Enter year");
// if anything divided by 4 is 0 then it will display leap year
    if(a% 4===0 && a%100===0 &&  a%400===0) 
    {
        alert("Leap year");
    }
    else
    {
    alert("Not leap year");
    }
