function oneSecPanel(time) {
  var receiptSeconds=time[6]+time[7];
  var oneSecondBulbPanel='O';
  if(receiptSeconds %2 === 0) {
    oneSecondBulbPanel='Y'
  }
  else {
   oneSecondBulbPanel='O'
  }
   return oneSecondBulbPanel+'\n';
}
function twentyHourPanel(time) {
  var receiptHours=time[0]+time[1]; 
  var twentyHourBulbPanel='';
  var fiveHourBulbs=Math.trunc(receiptHours/5)
  var rFiller;
  var oFiller;
  for (rFiller = 0; rFiller< fiveHourBulbs; rFiller++) {
    twentyHourBulbPanel=twentyHourBulbPanel+'R';
  }
  for (oFiller = 0; oFiller < (4-fiveHourBulbs); oFiller++) {
    twentyHourBulbPanel=twentyHourBulbPanel+'O';
  }
  return twentyHourBulbPanel+'\n';
}
function fourHourPanel(time) {
  var receiptHours=time[1]; 
  var fourHourBulbPanel='';
  var oneHourBulbs=receiptHours%5
  var rFiller;
  var oFiller;
  for (rFiller = 0; rFiller< oneHourBulbs; rFiller++) {
    fourHourBulbPanel=fourHourBulbPanel+'R';
  }
  for (oFiller = 0; oFiller < (4-oneHourBulbs); oFiller++) {
    fourHourBulbPanel=fourHourBulbPanel+'O';
  }
  return fourHourBulbPanel+'\n';
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
  var fourMinBulbPanel='';
  var oneMinBulbs=receiptMinutes%5
  var yFiller;
  var oFiller;
  for (yFiller = 0; yFiller< oneMinBulbs; yFiller++) {
    fourMinBulbPanel=fourMinBulbPanel+'Y';
  }
  for (oFiller = 0; oFiller < (4-oneMinBulbs); oFiller++) {
    fourMinBulbPanel=fourMinBulbPanel+'O';
  }
  return fourMinBulbPanel;
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