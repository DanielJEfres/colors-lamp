test('API endpoint responds successfully', async () => {
    const response = await fetch('http://localhost:8080/public/index.html');
    expect(response.status).toBe(200);
});