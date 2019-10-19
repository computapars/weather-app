const axios = require('axios');
const geolocation = require('./geolocation.js');

const getWeather = async function (loc) {
    try {   
        const location = await geolocation.getLocation(loc);
        const { lat, long, name } = location;
        return axios.get(`https://api.darksky.net/forecast/60cb6a96940d657cabc157cdcf5fe4b7/${lat},${long}`)
            .then((response) => {
                // success
                return {
                    name: name,
                    summary: response.data.daily.data[0].summary,
                    temperature: response.data.currently.temperature,
                    precipProbability: response.data.currently.precipProbability,
                }
            })
            .catch((err) => {
                // error
                console.log(err.response.data.error)
            })
            .finally(() => {
                // always executed
            });
    } catch (err) {
        console.log('Unable to reach DarkSky')
    }
    
}

module.exports = {
    getWeather: getWeather,
}
