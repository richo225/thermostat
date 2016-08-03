

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

  it('increases the temperature by 1 degree when you press the up button',function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
});
