function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let orbitalPeriodObj = {};
  let avgAlt = 0;
  let orbitalPeriod = 0;
  let returnArr = [];
  for(let i = 0; i < arr.length; i++) {
    orbitalPeriodObj = arr[i];
    avgAlt = orbitalPeriodObj.avgAlt;
    delete orbitalPeriodObj.avgAlt;
    orbitalPeriod = Math.round(((avgAlt + earthRadius)**3/GM)**(1/2)*2*Math.PI);
    orbitalPeriodObj.orbitalPeriod = orbitalPeriod;
    returnArr.push(orbitalPeriodObj);
  }
  return returnArr;
}
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
