test('API endpoint responds successfully', async () => {
    const response = await fetch('http://localhost:8080');
    expect(response.status).toBe(200);
});