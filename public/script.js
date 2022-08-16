var search = document.querySelector('.city-search')
let button = document.querySelector('.submit')
let wind = document.querySelector('[data-wind]')
let temperature = document.querySelector('[data-temperature]')
let precip = document.querySelector('[data-precipitation]')
const APIkey = 'b50b4b8c081de0f71583cf50189c755f'

button.addEventListener('click', function(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${APIkey}`)
  .then(response => response.json())
  .then(data => console.log(data)) 
})

