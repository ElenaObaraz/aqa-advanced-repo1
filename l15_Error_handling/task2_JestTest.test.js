const getPosts = require('./task2_AxiosFunction');

test('Correct header and params', async () => {
    const response = await getPosts(1);
    expect(response.status).toBe(200);
    expect(response.config.params).toEqual({userID: 1});
    expect(response.config.headers['Contetn-Type']).toBe('application/json');
    expect(response.config.headers['Authorization']).toBe('Bearer token');
});