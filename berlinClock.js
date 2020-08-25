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

exports.twentyHourPanel = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  //fiveHourPanel off created:
  var fiveHourBulbPanel='OOOO';
  var fiveHourBulbs=Math.trunc(rHours/5)
  //check if the number is multiple of 5
  if(fiveHourBulbs === 1) {
    fiveHourBulbPanel='ROOO'+'\n';
  }
  else if(fiveHourBulbs === 2) {
    fiveHourBulbPanel='RROO'+'\n';
  }
  else if(fiveHourBulbs === 3) {
    fiveHourBulbPanel='RRRO'+'\n';
  }
  else if(fiveHourBulbs === 4) {
    fiveHourBulbPanel='RRRR'+'\n';
  }
  else if(fiveHourBulbs === 0) {
    fiveHourBulbPanel='OOOO'+'\n';
  }
  return fiveHourBulbPanel;
}
exports.fourHourPanel = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  //oneHourPanel off created:
  var oneHourBulbPanel='OOOO';
  var oneHourBulbs=rHours%5;
  //check if the number is multiple of 5
  if(oneHourBulbs === 1) {
    oneHourBulbPanel='ROOO'+'\n';
  }
  else if(oneHourBulbs === 2) {
    oneHourBulbPanel='RROO'+'\n';
  }
  else if(oneHourBulbs === 3) {
    oneHourBulbPanel='RRRO'+'\n';
  }
  else if(oneHourBulbs === 4) {
    oneHourBulbPanel='RRRR'+'\n';
  }
  else if(oneHourBulbs === 0) {
    oneHourBulbPanel='OOOO'+'\n';
  }
  return oneHourBulbPanel;
}
exports.fiftyFiveMinPanel = (time) => {
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
exports.fourMinPanel = (time) => {
  var rrMinutes=time[3]+time[4]; //Receipt Hours from time
  //oneHourPanel off created:
  var oneMinBulbPanel='OOOO';
  var oneMinBulbs=rrMinutes%5
  //check if the number is multiple of 5
  if(oneMinBulbs === 1) {
    oneMinBulbPanel='YOOO';
  }
  else if(oneMinBulbs === 2) {
    oneMinBulbPanel='YYOO';
  }
  else if(oneMinBulbs === 3) {
    ooneMinBulbPanel='YYYO';
  }
  else if(oneMinBulbs=== 4) {
    oneMinBulbPanel='YYYY';
  }
  else if(oneMinBulbs === 0) {
    oneMinBulbPanel='OOOO';
  }
  return oneMinBulbPanel;
}

// exports.berlinClock = (Time) => {
//   var tBC='';
//   tBC=oneSecPanel(Time)+twentyHourPanel(Time)+fourHourPanel(Time)+fiftyFiveMinPanel(Time)+fourMinPanel(Time)
//   return tBC;
 
// }