const axios = require('axios');


axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%Angeles.json?access_token=pk.eyJ1IjoiY29tcHV0YXBhcnMiLCJhIjoiY2sxaTlrNXlpMW5xZTNqbXZwOXZwNnphZiJ9.-DBLUc_ogRzoKw6r6Ecv1w&limit=1')
    .then((response) => {
        // success
        if (response.data.features.length === 0) {
            console.log('No matching results');
        } else {
            console.log(`${response.data.features[0].place_name}. Lat: ${response.data.features[0].center[1]} , Long: ${response.data.features[0].center[0]}`)
        }
    }).catch((err) => {
        if (err){
            console.log('Not able to connect to mapbox');
        }
    });

axios.get('https://api.darksky.net/forecast/60cb6a96940d657cabc157cdcf5fe4b7/37.8267,-122.4233')
    .then((response) => {
        // success
        console.log(`${response.data.daily.data[0].summary} It is currently ${response.data.currently.temperature} degrees out. There is a ${response.data.currently.precipProbability}% chance of rain.`)
    })
    .catch((err) => {
        // error
        console.log(err)
    })
    .finally(() => {
        // always executed
    });
