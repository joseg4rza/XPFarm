
//   Test.assertSimilar(berlinClock("12:56:01"), 
//   "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
exports.berlinClock = (time) => {
  return false;  
    //good Luck!
var display='';
//var secBulbPanel= [];
// var fiveHourBulbPanel= [];
// var oneHourBulbPanel= [];
// var fiveMinBulbPanel= [];
// var oneMinBulbPanel= [];

var secBulbPanel= 'pato1'
var fiveHourBulbPanel= 'pato2'
var oneHourBulbPanel= 'pato3'
var fiveMinBulbPanel= 'pato4'
var oneMinBulbPanel= 'pato5'

var secBulb='';
var fiveHourBulb='';
var oneHourBulb='';
var fiveMinBulb='';
var oneMinBulb=''; 

    display=secBulbPanel+'\n'+fiveHourBulbPanel+'\n'+oneHourBulbPanel+'\n'+fiveMinBulbPanel+'\n'+oneMinBulbPanel;
    return display;
  }

// function towerBuilder(nFloors) {//3
//   var tower= [];
//   var currentFloor=0
//   var spacesPerSide=0
//   var bricks=0
//   var side=''
//   var center=''
//   var completeFloor=''
//   var width=(nFloors*2)-1
//   for (var vf = 0; vf < nFloors; vf++) { //Ciclo de astericos previos
//     currentFloor=nFloors-vf
//     spacesPerSide=currentFloor-1
//     bricks=width-(spacesPerSide*2)
  
//     //first steps, create side string and center string
//     for(var ls=0; ls<spacesPerSide; ls++){ //CREATE SIDE --ls means lateral spaces
//       side=side+' ';
//     }//side created
//      for(var cb=0; cb<bricks; cb++){ //CREATE SIDE  --cb means center bricks
//       center=center+'*';
//     }//center created
    
//     //Second step, complet the floor: concatenate side + center + side again
//     completeFloor=side+center+side
    
//     //Third Put the floor in the -tower - array - push the elemnt into the array
//     tower[vf]=(completeFloor);
//     side=''
//      center=''
//     }
//     return tower;
// }




//   Test.assertSimilar(berlinClock("12:56:01"), 
//   "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
  
//   Test.assertSimilar(berlinClock("00:00:00"), 
//   "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")
  
//   Test.assertSimilar(berlinClock("22:32:45"), 
//   "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO")

//   The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

// alt text

// The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

// Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
// Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

// Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

//     “O” = Light off
//     “R” = Red light
//     “Y” = Yellow light


// Example Test Case:

// Input String:
// 12:56:01

// Output String:
// O
// RROO
// RROO
// YYRYYRYYRYY
// YOOO

// Please check the example test cases for the required output format.
