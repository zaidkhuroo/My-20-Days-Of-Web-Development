//Exercise 1 to make a chess board on karel IDE
function main(){
    putBeeper();
   Ground();
    Ground();
    floor1();
    Ground();
    Ground();
    floor1();
    Ground();
    Ground();
    
  }
    function Ground(){
  putBeeper();
  move();
  move();
  putBeeper();
  }
  function floor1(){
     turnLeft();
     move();
     turnLeft();
     move();
     putBeeper();
     move();
     move();
     putBeeper();
     move();
     turnRight();
     move();
     turnRight();
     }