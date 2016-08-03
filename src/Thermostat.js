'use strict';

function Thermostat(){
  this._DEFAULT_TEMPERATURE = 20;
  this.current_temp = this._DEFAULT_TEMPERATURE;
  this.power_saving = true
}

Thermostat.prototype.temperature = function(){
  return this.current_temp;
};

Thermostat.prototype.increase_temp = function(){
  if (this.current_temp === 25) {
    throw new Error('Temperature cannot go higher than 25ºC');
  }
  return this.current_temp += 1;
};

Thermostat.prototype.decrease_temp = function(){
  if (this.current_temp === 10) {
    throw new Error('Temperature cannot go lower than 10ºC');
  }
  return this.current_temp -= 1;

};

Thermostat.prototype.power_saving_switch = function() {
  if (this.power_saving === true) {
    this.power_saving = false;
  } else {
    this.power_saving = true;
  };
};
