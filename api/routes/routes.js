const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join( __dirname, '../public')))
app.get('/home', (req, rsp) => {
    rsp.send('Hello girl')  
});

app.get('/help', (req, rsp) => {
    rsp.send('Help Page')  
})

app.get('/about', (req, rsp) => {
    rsp.send('About this page')  
})

app.get('/weather', (req, rsp) => {
    rsp.send({
        location: 'Marlene',
        forecast: 'horrible',
    })  
})

app.listen(3001);