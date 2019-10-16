const axios = require('axios');
import { getLocation } from './geolocation.js';

export default async function getWeather (loc) {
    try {   
        const location = await getLocation(loc);
        const { lat, long, name } = location;
        axios.get(`https://api.darksky.net/forecast/60cb6a96940d657cabc157cdcf5fe4b7/${lat},${long}`)
            .then((response) => {
                // success
                console.log(name)
                console.log(`${response.data.daily.data[0].summary} It is currently ${response.data.currently.temperature} degrees out. There is a ${response.data.currently.precipProbability}% chance of rain.`)
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

