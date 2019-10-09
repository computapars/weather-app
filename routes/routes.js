const express = require('express');

const app = express();
app.get('', (req, rsp) => {
    rsp.send('Hello girl')  
});

app.get('/help', (req, rsp) => {
    rsp.send('Help Page')  
})

app.get('/about', (req, rsp) => {
    rsp.send('<h1>About Page</h1>')  
})

app.get('/weather', (req, rsp) => {
    rsp.send({
        location: 'Marlene',
        forecast: 'horrible',
    })  
})

app.listen(3000);