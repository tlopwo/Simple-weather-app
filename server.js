if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const APP_API_KEY = process.env.APP_API_KEY
const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=/${APP_API_KEY}'
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(3000, () => {
    console.log('SERVER ON')
})