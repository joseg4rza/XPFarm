
//   Test.assertSimilar(berlinClock("12:56:01"), 
//   "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
exports.berlinClock = (time) => {
  
  
  var rSeconds=time[6]+time[7]; //Receipt Seconds from time
  //Berlin clock off created:
  
  
  var oneHourBulbPanel='OOOO';
  var fiveMinBulbPanel='OOOOOOOOOOO';
  var oneMinBulbPanel='OOOO';
//secondsPanel=rSeconds
//check if the number is even
if(rSeconds %2 === 0) {
  oneSecondBulbPanel='Y'+'\n';
}
// if the number is odd
else {
  oneSecondBulbPanel='O'+'\n';
}
 //5Hour Bulbs Panel 
//Divide the hour value between 5hour blocks and then extract that

//METER TODO A METODOS Y HACER LOS TESTEOS ASÓ
  
  var berlinClock=oneSecondBulbPanel+'\n'+fiveHourBulbPanel+'\n'+oneHourBulbPanel+'\n'+fiveMinBulbPanel+'\n'+oneMinBulbPanel;
  
  var testPanel='';
  testPanel=oneSecondBulbPanel;

  return testPanel;
  //return berlinClock;
  
}

exports.oneSecPanel = (time) => {
    var rSeconds=time[6]+time[7]; //Receipt Seconds from time
  //Berlin clock off created:
  var oneSecondBulbPanel='O';
  //secondsPanel=rSeconds
  //check if the number is even
  if(rSeconds %2 === 0) {
    oneSecondBulbPanel='Y'+'\n';
  }
  // if the number is odd
  else {
   oneSecondBulbPanel='O'+'\n';
  }
   return oneSecondBulbPanel;
}

exports.fiveHourPanel = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  //fiveHourPanel off created:
  var fiveHourBulbPanel='OOOO';
  var fiveHourBulbs=Math.trunc(rHours/5)
  //check if the number is multiple of 5
  if(fiveHourBulbs === 1) {
    fiveHourBulbPanel='YOOO'+'\n';
  }
  else if(fiveHourBulbs === 2) {
    fiveHourBulbPanel='YYOO'+'\n';
  }
  else if(fiveHourBulbs === 3) {
    fiveHourBulbPanel='YYYO'+'\n';
  }
  else if(fiveHourBulbs === 4) {
    fiveHourBulbPanel='YYYY'+'\n';
  }
  return fiveHourBulbPanel;
}
exports.oneHourPanel = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  //oneHourPanel off created:
  var oneHourBulbPanel='OOOO';
  
  //check if the number is multiple of 5
  if(rHours%5 === 1) {
    oneHourBulbPanel='YOOO'+'\n';
  }
  else if(rHours%5 === 2) {
    oneHourBulbPanel='YYOO'+'\n';
  }
  else if(rHours%5 === 3) {
    oneHourBulbPanel='YYYO'+'\n';
  }
  else if(rHours%5 === 4) {
    oneHourBulbPanel='YYYY'+'\n';
  }
  else if(rHours%5 === 0) {
    oneHourBulbPanel='OOOO'+'\n';
  }
  return oneHourBulbPanel;
}
exports.fiveMinPanel = (time) => {
  var rMinutes=time[3]+time[4]; //Receipt Minutes from time
  //oneHourPanel off created:
  var fiveMinBulbPanel='OOOOOOOOOOO';
  var fiveMinBulbs=Math.trunc(rMinutes/5)
  
  //check if the number is multiple of 5
  if(fiveMinBulbs === 1) {
    fiveMinBulbPanel='YOOOOOOOOOO'+'\n';
  }
  else if(fiveMinBulbs === 2) {
    fiveMinBulbPanel='YYOOOOOOOOO'+'\n';
  }
  else if(fiveMinBulbs === 3) {
    fiveMinBulbPanel='YYROOOOOOOO'+'\n';
  }
  else if(fiveMinBulbs === 4) {
    fiveMinBulbPanel='YYRYOOOOOOO'+'\n';
  }
  else if(fiveMinBulbs=== 5) {
    fiveMinBulbPanel='YYRYYOOOOOO'+'\n';
  }
  else if(fiveMinBulbs === 6) {
    fiveMinBulbPanel='YYRYYROOOOO'+'\n';
  }
  else if(fiveMinBulbs === 7) {
    fiveMinBulbPanel='YYRYYRYOOOO'+'\n';
  }
  else if(fiveMinBulbs === 8) {
    fiveMinBulbPanel='YYRYYRYYOOO'+'\n';
  }
  else if(fiveMinBulbs === 9) {
    fiveMinBulbPanel='YYRYYRYYROO'+'\n';
  }
  else if(fiveMinBulbs === 10) {
    fiveMinBulbPanel='YYRYYRYYRYO'+'\n';
  }
  else if(fiveMinBulbs === 11) {
    fiveMinBulbPanel='YYRYYRYYRYY'+'\n';
  }
  else if(fiveMinBulbs === 0) {
    fiveMinBulbPanel='OOOOOOOOOOO'+'\n';
  }
  return fiveMinBulbPanel;
}






// exports.naturalTimeReader = (time,elementRequired) => {
//   var rHours=time[0]+time[1]; //Receipt Hours from time
//   var rMinutes=time[3]+time[4]; //Receipt Minutes from time
//   var rSeconds=time[6]+time[7]; //Receipt Seconds from time
  
//   if(elementRequired === hours) {
//     return rHours;
//   }
//   // if the number is odd
//   else {if(elementRequired === hours) {
//     return rHours;
//   }
//     return oneSecondBulbPanel;

// }



