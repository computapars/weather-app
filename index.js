const path = require('path');
const express = require('express');
const weather = require('./utils/weather');
const app = express();

app.use(express.static(path.join( __dirname, '../public')))
app.get('/home', (req, rsp) => {
    rsp.send({
        title: 'hey girl',
        body: 'whats the deal'
    })  
});

app.get('/help', (req, rsp) => {
    rsp.send('Help Page')  
})

app.get('/about', (req, rsp) => {
    rsp.send('About this page')  
})

app.get('/weather', (req, rsp) => {
    if (!req.query.address) {
        return rsp.send({
            error: 'No address provided'
        });
    } else {
        async function getTheWeather() {
            try {
                const forecast = await weather.getWeather(req.query.address);
                return rsp.send({
                    name: forecast.name,
                    summary: `${forecast.summary} It is currently ${forecast.temperature} degrees out. There is a ${forecast.precipProbability}% chance of rain.`,
                });
            } catch (err) {
                rsp.send({
                    error: 'nope'
                });
            }
        }
        getTheWeather()
    }    
});

app.listen(3001);