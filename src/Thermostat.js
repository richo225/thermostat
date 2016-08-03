'use strict';

function Thermostat(){
  this._DEFAULT_TEMPERATURE = 20;
  this.current_temp = this._DEFAULT_TEMPERATURE;
}

Thermostat.prototype.temperature = function(){
  return this.current_temp;
};

Thermostat.prototype.increase_temp = function(){
  return this.current_temp += 1;
};

Thermostat.prototype.decrease_temp = function(){
  return this.current_temp -= 1;
};
