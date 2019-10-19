const axios = require('axios');

async function getLocation (loc) {
    try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(loc)}.json?access_token=pk.eyJ1IjoiY29tcHV0YXBhcnMiLCJhIjoiY2sxaTlrNXlpMW5xZTNqbXZwOXZwNnphZiJ9.-DBLUc_ogRzoKw6r6Ecv1w`)
        if (response.data.features.length == 0){
            throw new Error('Unable to find location, try another search')
        } else {
            return {
                lat: response.data.features[0].center[1],
                long: response.data.features[0].center[0],
                name: response.data.features[0].place_name,
            }
        }
    } catch (err) {
        console.log('Unable to reach location services');
    }  
}

module.exports = {
    getLocation: getLocation,
}