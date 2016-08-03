Thermostat = function(){
  this.temperature = 20;
  this.powerSave = false;
};



Thermostat.prototype.temperature = function () {
  return this.temperature;
};


Thermostat.prototype.up = function () {
  var msg  = 'Powersave On: Can not go above 25 degrees';
  var msg2 = 'Powersave Off: Can not go above 32 degrees';
  if  (this.powerSave   && (this.temperature >= 25)) throw new Error(msg);
  if ((!this.powerSave) && (this.temperature >= 32)) throw new Error(msg2);
  return this.temperature += 1;
};


Thermostat.prototype.down = function () {
  var msg = "It's too clod you CRAZY!!";
  if (this.temperature <= 10) throw new Error(msg);
  return this.temperature -= 1;
};

Thermostat.prototype.powerSavingOn = function () {
  return this.powerSave = true;
  };

Thermostat.prototype.powerSave = function () {
  return this.powerSave;
  };

Thermostat.prototype.powerSavingOff = function () {
  return this.powerSave = false;
  };
