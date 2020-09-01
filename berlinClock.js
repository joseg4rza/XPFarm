function oneSecPanel(time) {
    var receiptSeconds=time[6]+time[7];
  var oneSecondBulbPanel='O';
   if(receiptSeconds %2 === 0) {
    oneSecondBulbPanel='Y'+'\n';
  }
  else {
   oneSecondBulbPanel='O'+'\n';
  }
   return oneSecondBulbPanel;
}
function twentyHourPanel(time) {
  var receiptHours=time[0]+time[1]; 
  var fiveHourBulbPanel='OOOO';
  var fiveHourBulbs=Math.trunc(receiptHours/5)
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
function fourHourPanel(time) {
  var receiptHours=time[0]+time[1]; 
  var oneHourBulbPanel='OOOO';
  var oneHourBulbs=receiptHours%5;
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
function fiftyFiveMinPanel(time) {
  var receiptMinutes=time[3]+time[4];
  var fiveMinBulbPanel='OOOOOOOOOOO';
  var fiveMinBulbs=Math.trunc(receiptMinutes/5)
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

function fourMinPanel(time) {
  var receiptMinutes=time[4]; 
  var oneMinBulbPanel='';
  var oneMinBulbs=receiptMinutes%5
  var yFiller;
  var oFiller;
  for (yFiller = 0; yFiller< oneMinBulbs; yFiller++) {
    oneMinBulbPanel=oneMinBulbPanel+'Y';
  }
  for (oFiller = 0; oFiller < (4-oneMinBulbs); oFiller++) {
    oneMinBulbPanel=oneMinBulbPanel+'O';
  }
  return oneMinBulbPanel+'\n';
}

function berlinClock(Time) {
   return oneSecPanel(Time)+twentyHourPanel(Time)+fourHourPanel(Time)+fiftyFiveMinPanel(Time)+fourMinPanel(Time);
}

module.exports = {
  oneSecPanel,
  twentyHourPanel,
  fourHourPanel,
  fiftyFiveMinPanel,
  fourMinPanel,
  berlinClock
}