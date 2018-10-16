// Write your solution in this file!
driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = Object.assign({}, driver); //copy of driver
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}


function deleteFromDriverByKey(driver, key) {
  newDriver = Object.assign({}, driver); //copy of driver
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}