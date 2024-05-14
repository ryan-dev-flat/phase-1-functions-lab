// index.js
const hqStreet = 42;
const blockLengthInFeet = 264;

function distanceFromHqInBlocks(pickupStreet) {
  return Math.abs(pickupStreet - hqStreet);
}

function distanceFromHqInFeet(pickupStreet) {
  return distanceFromHqInBlocks(pickupStreet) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockLengthInFeet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
