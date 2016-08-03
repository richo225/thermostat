// SPECIFICATION 1:
// Thermostat starts at 20 degrees

describe('Thermostat', function(){
  var thermostat;

  it('initializes at 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });
});
