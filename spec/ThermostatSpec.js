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

});
