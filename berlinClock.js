
//   Test.assertSimilar(berlinClock("12:56:01"), 
//   "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
exports.berlinClock = (time) => {
  var rHours=time[0]+time[1]; //Receipt Hours from time
  var rMinutes=time[3]+time[4]; //Receipt Minutes from time
  var rSeconds=time[6]+time[7]; //Receipt Seconds from time
  var panel='';
 panel=rHours+rMinutes+rSeconds;

  return panel;
  
}

