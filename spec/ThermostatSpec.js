'use strict';

describe ('Thermostat', function(){
  var thermostat;
  var i;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees C', function(){
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE);
  });

  it('can increase the temperature by 1 degree', function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE += 1);
  });

  it('can decrease the temperature by 1 degree', function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE -= 1);
  });

  it('returns error if temperature is below 10 degrees C', function(){
    thermostat.currentTemp = 10;
    expect(function(){ thermostat.decreaseTemp(); }).toThrowError('Temperature cannot go lower than 10°C');
  });

  describe ('power saving mode on', function(){

    it('has a default maximum temperature of 25°C', function(){
      expect(thermostat.maximumTemp).toEqual(thermostat._POWER_SAVE_TEMP);
    });

    it('returns error if temperature is above 25 degrees C', function(){
      thermostat.currentTemp = thermostat._POWER_SAVE_TEMP;
      expect(function(){ thermostat.increaseTemp(); }).toThrowError('Temperature cannot go higher than 25°C');
    });

    it('is on by default', function(){
      expect(thermostat.powerSaving).toBe(true);
    });
  });

  describe('power saving mode off', function(){

    it('can be switched off', function(){
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toBe(false);
    });

    it('changes the maximum temperature to 32°C', function(){
      thermostat.powerSavingSwitch();
      expect(thermostat.maximumTemp).toEqual(thermostat._MAX_TEMP);
    });
  });

  describe('Temperature Reset', function(){

    it('resets the temperature back to default', function(){
      for (i = 0; i < 4; i++) {
        thermostat.decreaseTemp();
      }
      thermostat.resetTemp();
      expect(thermostat.currentTemp).toEqual(thermostat._DEFAULT_TEMPERATURE);
    });
  });
});
