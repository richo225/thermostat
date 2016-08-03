'use strict';

describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees C', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature by 1 degree', function(){
    thermostat.increase_temp();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can decrease the temperature by 1 degree', function(){
    thermostat.decrease_temp();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('returns error if temperature is below 10 degrees C', function(){
    thermostat.current_temp = 10
    expect(function(){ thermostat.decrease_temp() }).toThrowError('Temperature cannot go lower than 10ºC')
  });

  it('returns error if temrperature is above 25 degrees C', function(){
    thermostat.current_temp = 25
    expect(function(){ thermostat.increase_temp() }).toThrowError('Temperature cannot go higher than 25ºC')
  });

  describe ('power saving mode', function(){
    it('is on by default', function(){
      expect(thermostat.power_saving).toBe(true);
    });

    it('can be switched off', function(){
      thermostat.power_saving_switch()
      expect(thermostat.power_saving).toBe(false);
    });

  });

});
