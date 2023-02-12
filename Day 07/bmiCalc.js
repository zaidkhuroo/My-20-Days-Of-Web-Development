function BmiCalculator(weight,height)
{
    var bmi=weight / (height*height);
    return Math.round(bmi);
}
var bmi=BmiCalculator(65,1.8);
console.log(bmi);
