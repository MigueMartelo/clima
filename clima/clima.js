const axios = require('axios');
const apiKey = '4c391c426435f342c8ecc236faf2377e';
const url = 'http://api.openweathermap.org/data/2.5/weather?';

const getClima = async(lat, lng) => {

    let resp = await axios.get(`${url}lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}