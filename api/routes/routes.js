const path = require('path');
const express = require('express');

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
    }
    rsp.send({
        address: req.query.address,
    })  
})

app.listen(3001);