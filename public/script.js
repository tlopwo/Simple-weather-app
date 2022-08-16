var search = document.querySelector('.city-search')
let button = document.querySelector('.submit')
let wind = document.querySelector('[data-wind]')
let temperature = document.querySelector('[data-temperature]')
let pressure = document.querySelector('[data-pressure]')
const APIkey = 'b50b4b8c081de0f71583cf50189c755f'
var skycons = new Skycons({"color": "pink"});
skycons.play();


button.addEventListener('click', function(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${APIkey}`)
  .then(response => response.json())
  .then(data => {
    var temperatureValue = data['main']['temp']
    var windValue = data['wind']['speed']
    var pressureValue = data['main']['pressure']
  

    temperature.innerHTML = temperatureValue;
    wind.innerHTML = windValue;
    pressure.innerHTML = pressureValue;
  })

  })
