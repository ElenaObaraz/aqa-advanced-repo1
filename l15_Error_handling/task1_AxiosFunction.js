const axios = require ('axios');

async function getBrokenUrl(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/poo');
    return response.status;    
}

module.exports = getBrokenUrl;