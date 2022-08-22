var search = document.querySelector('.city-search')
let button = document.querySelector('.submit')
let wind = document.querySelector('[data-wind]')
let temperature = document.querySelector('[data-temperature]')
let pressure = document.querySelector('[data-pressure]')
var desc = document.getElementById('desc')
const APIkey = 'b50b4b8c081de0f71583cf50189c755f'

button.addEventListener('click', function(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${APIkey}`)
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => {
    var temperatureValue = data['main']['temp']
    var windValue = data['wind']['speed'] + ""
    var pressureValue = data['main']['pressure']
    var citynameValue = data['name']
    var descValue = "Currently: " + data['weather'][0]['description'] 

    temperature.innerHTML = temperatureValue.toFixed();
    wind.innerHTML = windValue;
    pressure.innerHTML = pressureValue.toFixed();
    cityname.innerHTML = citynameValue;
    desc.innerHTML = descValue;
  })
})