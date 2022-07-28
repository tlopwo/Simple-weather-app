if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const MAP_API_KEY = process.env.MAP_API_KEY
const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const url = 'https://weatherkit.apple.com/api/v1/availability/${req.body.latitude}/${req.body.longtitude}?units=auto'
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(3000, () => {
    console.log('SERVER ON')
})