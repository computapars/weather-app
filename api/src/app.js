const axios = require('axios');
const yargs = require('yargs');
yargs.version('1.0.2');

/* Sets up Yarg commands */
const locationObj = {
    location : {
        desc: 'Location of where to search weather',
        type: 'string',
        demandOption: true,
    },
};

yargs.command('get_weather', 'Finds the location and gets weather', locationObj, (argv) => {
    getWeather(argv.location);
}).help().argv;

async function getLocation (loc) {
    try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(loc)}.json?access_token=pk.eyJ1IjoiY29tcHV0YXBhcnMiLCJhIjoiY2sxaTlrNXlpMW5xZTNqbXZwOXZwNnphZiJ9.-DBLUc_ogRzoKw6r6Ecv1w`)
        if (response.data.features.length == 0){
            throw new Error('Unable to find location, try another search')
        } else {
            return {
                lat: await response.data.features[0].center[1],
                long: await response.data.features[0].center[0],
                name: await response.data.features[0].place_name,
            }
        }
    } catch (err) {
        console.log('Unable to reach location services');
    }  
}

async function getWeather (loc) {
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

