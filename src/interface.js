$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

   $("#power-saving-toggle").bootstrapSwitch();
  // $("#power-saving-toggle").click/toggle(function(){
  //   thermostat.powerSavingSwitch();
  //   updateTemperature();
  // });
  $("#power-saving-toggle").on('switchChange.bootstrapSwitch', function() {
    thermostat.powerSavingSwitch();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8c32f240d604631b4cc6cde00d774840&units=metric', function(data){
    $('#current-temperature').text(data.main.temp);
  });

});
