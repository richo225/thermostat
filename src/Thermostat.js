Thermostat = function(){
  this.temperature = 20;
};


Thermostat.prototype.temperature = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
   return this.temperature += 1
};

Thermostat.prototype.down = function () {
  return this.temperature -= 1
};

// Another way of doing it:
// Thermostat.prototype = {
//   temperature: function(){
//     return this._temperature;
//   },
//
//   up: function() {
//     this._temperature += 1
//   }
// };
