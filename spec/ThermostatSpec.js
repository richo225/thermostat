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
    thermostat.currentTemp = thermostat._MINIMUM_TEMP;
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

  describe('Energy Usage', function(){

    describe('when temperature is below 18°C', function(){
      it('energy usage is low', function(){
        for (i= 0; i <3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when temperature is between 18°C and 25°C', function(){
      it("energy usage is medium", function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when temperature is above 25°C', function(){
      it('energy usage is high', function(){
        thermostat.powerSaving = false;
        for (i= 0; i <7; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });

  });

});
