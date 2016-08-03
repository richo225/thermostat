

describe('Thermostat', function(){
  var thermostat;
  // SPECIFICATION 1:
  // Thermostat starts at 20 degrees
  beforeEach (function(){
    thermostat = new Thermostat();
  });

  it('initializes at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  // You can increase the temperature with the up button
  // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 21

  it('increases the temperature by 1 degree when you press the up button',function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  // You can decrease the temperature with the down button
    // USE CHANGE_BY (OR EQUIVALENT) SO WE DON'T HARDCODE 19
  it('decreases the temperature by 1 degree when you press the down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('Cannt drop below 10 dgrees',function(){
    var times =10;
    for(var i=0;
      i < times;
      i++) {
        thermostat.down();
      };
    expect(function(){ thermostat.down(); }).toThrow( Error("It's too clod you CRAZY!!"));
  });


// Power saving mode is on by default
  it('Initialy the power saving mode is OFF',function(){
    expect(thermostat.powerSave).toBe(true);
  });


// If power saving mode is on, the maximum temperature is 25 degrees
  it('The power saving mode can be turned on',function(){
    thermostat.powerSavingOn();
    expect(thermostat.powerSave).toBe(true);
  });

  it('The power saving mode can be turned off',function(){
    thermostat.powerSavingOff();
    expect(thermostat.powerSave).toBe(false);
  });


  it('If power saving mode is on, max temp is 25',function(){
    thermostat.powerSavingOn();
    var times =5;
    for(var i=0;
      i < times;
      i++) {
        thermostat.up();
      };
    expect(function(){ thermostat.up(); }).toThrow( Error('Powersave On: Can not go above 25 degrees'))
  });

  // If power saving mode is off, the maximum temperature is 32 degrees
  it('If power saving mode is off, the maximum temperature is 32 degrees', function(){
    thermostat.powerSavingOff();
    var times =12;
    for(var i=0; i < times; i++){
      thermostat.up();
    };
    expect(function(){ thermostat.up(); }).toThrow( Error('Powersave Off: Can not go above 32 degrees'))
  });


  // You can reset the temperature to 20 by hitting the reset button
  it('Resets the temperature to 20 by pressing reset button',function() {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20)
  });




});
