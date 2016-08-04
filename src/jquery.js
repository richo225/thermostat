$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature').text(thermostat.temperature);
  if (thermostat.powerSavingMode) {
    $('#power-saving-status').text('ON');
  }else {
    $('#power-saving-status').text('OFF');
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };


$('#temperature-down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#temperature-up').click(function() {
  thermostat.up();
  updateTemperature();
});

$('#temperature-reset').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.switchPowerSavingModeOn();
  $('#power-saving-status').text('ON');
  updateTemperature();
});

$('#powersaving-off').click(function() {
  thermostat.switchPowerSavingModeOff();
  $('#power-saving-status').text('OFF');
  updateTemperature();
});
});
