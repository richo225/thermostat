'use strict';

function Thermostat(){
  this._MINIMUM_TEMP = 10;
  this._DEFAULT_TEMPERATURE = 20;
  this._POWER_SAVE_TEMP = 25;
  this._MAX_TEMP = 32;
  this.currentTemp = this._DEFAULT_TEMPERATURE;
  this.powerSaving = true;
  this.maximumTemp = this._POWER_SAVE_TEMP;
  this._LOW_TEMP = 18;
}

Thermostat.prototype.temperature = function(){
  return this.currentTemp;
};

Thermostat.prototype.isMaximumTemp = function() {
  if(this.powerSaving === false) {
    return this.currentTemp === this._MAX_TEMP;
  }
  return this.currentTemp === this._POWER_SAVE_TEMP;
};

Thermostat.prototype.increaseTemp = function(){
  if (this.isMaximumTemp()) {
    return;
  }
  return this.currentTemp += 1;
};

Thermostat.prototype.decreaseTemp = function(){
  if (this.currentTemp === this._MINIMUM_TEMP) {
    return;
  }
  return this.currentTemp -= 1;

};

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSaving === true) {
    this.powerSaving = false;
    this.maximumTemp = this._MAX_TEMP;
  } else {
    this.powerSaving = true;
    this.maximumTemp = this._POWER_SAVE_TEMP;
  }
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemp = this._DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemp < this._LOW_TEMP){
    return 'low-usage';
  }
  if (this.currentTemp > this._POWER_SAVE_TEMP){
    return 'high-usage';
  }
  return 'medium-usage';
};
