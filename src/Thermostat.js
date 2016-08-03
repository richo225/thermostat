Thermostat = function(){
  this.temperature = 20;
  this.powerSave = false;
};


Thermostat.prototype.powerSavingOn = function () {
  return this.powerSave = true
  };

Thermostat.prototype.powerSave = function () {
  return this.powerSave;
  };

Thermostat.prototype.powerSavingOff = function () {
  return this.powerSave = false
  };

  Thermostat.prototype.temperature = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
   return this.temperature += 1
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error("It's too clod you CRAZY!!");
};







  // Why is this not passing the test
  // if (this.temperature === 10) throw new Error("It's too clod you CRAZY!!");
  // if (this.temperature > 10) return this.temperature -= 1;

};
