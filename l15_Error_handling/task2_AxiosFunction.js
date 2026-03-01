const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts(userID){
    return axios.get(`${BASE_URL}`, {
        headers: {
            'Contetn-Type': 'application/json',
            'Authorization': 'Bearer token',
        },
        params: {
            userID,
        },
    });
}

module.exports = getPosts;