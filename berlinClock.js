
//   Test.assertSimilar(berlinClock("12:56:01"), 
//   "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
exports.berlinClock = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  var rMinutes=time[3]+time[4]; //Receipt Minutes from time
  var rSeconds=time[6]+time[7]; //Receipt Seconds from time
  //Berlin clock off created:
  var oneSecondBulbPanel='O';
  var fiveHourBulbPanel='OOOO';
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
  
  
  
  var berlinClock=oneSecondBulbPanel+'\n'+fiveHourBulbPanel+'\n'+oneHourBulbPanel+'\n'+fiveMinBulbPanel+'\n'+oneMinBulbPanel;
  
  var testPanel='';
  testPanel=oneSecondBulbPanel;

  return testPanel;
  //return berlinClock;
  
}

