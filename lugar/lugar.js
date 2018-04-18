const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let key = 'AIzaSyAMwH3ozDbx0AWD57ORF_W1MU_qpuvPnys';

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${key}`);

    if (resp.data.status === 'zero_results') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
};

module.exports = {
    getLugarLatLng
}