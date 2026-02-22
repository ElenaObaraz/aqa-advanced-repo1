const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests with axios', () => { 
    // GET /posts/1 
    test('GET /posts/1 should return correct post', async () => { 
        const response = await axios.get(`${BASE_URL}/posts/1`); 
        expect(response.status).toBe(200); 
        expect(response.data).toHaveProperty('id', 1); 
        expect(response.data).toHaveProperty('userId', 1); 
        expect(response.data).toHaveProperty('title'); 
    }); 
          
    // GET /users/1 
    test('GET /users/1 should return correct user', async () => { 
        const response = await axios.get(`${BASE_URL}/users/1`); 
        expect(response.status).toBe(200); 
        expect(response.data).toHaveProperty('id', 1); 
        expect(response.data).toHaveProperty('email'); 
        expect(response.data).toHaveProperty('address'); 
    }); 
        
    // GET /todos/1 
    test('GET /todos/1 should return correct todo', async () => { 
        const response = await axios.get(`${BASE_URL}/todos/1`); 
        expect(response.status).toBe(200); 
        expect(response.data).toHaveProperty('id', 1); 
        expect(response.data).toHaveProperty('completed'); 
    }); 
        
    // POST /posts 
    test('POST /posts should create a new post', async () => { 
        const newPost = { title: 'Test title', body: 'Test body', userId: 1 }; 
        const response = await axios.post(`${BASE_URL}/posts`, newPost); 
        expect(response.status).toBe(201); 
        expect(response.data).toMatchObject(newPost); 
        expect(response.data).toHaveProperty('userId', 1);
        expect(response.data).toHaveProperty('title', 'Test title');
        expect(response.data).toHaveProperty('body', 'Test body');
    }); 
        
    // POST /users 
    test('POST /users should create a new user', async () => { 
        const newUser = { name: 'Peter Parker', username: 'SpiderMan', email: 'peter_parker@example.com' }; 
        const response = await axios.post(`${BASE_URL}/users`, newUser); 
        expect(response.status).toBe(201); 
        expect(response.data).toMatchObject(newUser); 
        expect(response.data).toHaveProperty('name', 'Peter Parker'); 
        expect(response.data).toHaveProperty('username', 'SpiderMan');
        expect(response.data).toHaveProperty('email', 'peter_parker@example.com');
    });
});