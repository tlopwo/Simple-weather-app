const button = document.querySelector('.submit')
const search = document.querySelector('[data-city-search]')
const wind = document.querySelector('[data-wind]')
const temperature = document.querySelector('[data-temperature]')
const precip = document.querySelector('[data-precipitation]')

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q=city.name&appid=b50b4b8c081de0f71583cf50189c755f')
.then(response => response.json())
.then(data => console.log(data)) 


const icon1 = new Skycons({ color: '#222' }) 
  icon1.set('icon', 'clear-day')
  icon1.play()
})
