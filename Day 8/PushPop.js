
var start=[];
var count=1;
function fizz(){
    if(count % 3 === 0 && count % 5 === 0){
        start.push("terminal");
    }
if(count % 3 === 0)
{
            start.push("buzzy");
}
            else if(count % 5 === 0 )
            {
            start.push("fuzzy");
    }
    else
{
    start.push(count);

}
count++;
console.log(start);
}