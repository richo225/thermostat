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

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url   = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=267264c5f0acf7f84238123331b10e7a'
    var units = '&units=metric'
    $.get(url + token + units , function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

});
