const greenPark = require('./greenp.json');
const lots = greenPark.carparks;

lots.forEach(parkingSpot => {
  if(parkingSpot.rate){
    console.log(parkingSpot.rate);
  }
})