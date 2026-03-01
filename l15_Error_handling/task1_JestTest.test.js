const getBrokenUrl = require('./task1_AxiosFunction');

test('Error handling - invalid URL', async () => {
    await expect(getBrokenUrl()).rejects.toThrow('404');    
});