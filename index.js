// index.js
const feetPerBlock = 264
const scuberHeadquarters = 42

function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - scuberHeadquarters)
  };

function distanceFromHqInFeet(pickupLocation) {
   return (distanceFromHqInBlocks(pickupLocation)*feetPerBlock)
    }

function distanceTravelledInFeet(pickupLocation, destination) {
 return   Math.abs(distanceFromHqInFeet(pickupLocation) - distanceFromHqInFeet(destination))
};

function calculatesFarePrice(pickupLocation, destination) {
  if (distanceTravelledInFeet(pickupLocation, destination) <= 400) {
    return parseInt(0)
  };
  if (distanceTravelledInFeet(pickupLocation, destination) <= 2000) {
      return  parseFloat((distanceTravelledInFeet(pickupLocation, destination)-400)*(2/100))
  };
  if (distanceTravelledInFeet(pickupLocation, destination) <= 2500) {
      return 25
  } else
  {
      return 'cannot travel that far'
      }
} 