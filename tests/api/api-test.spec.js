const { test, expect, request } = require('@playwright/test');

test.describe('Playwright API Tests', () => {
  
  test('should fetch data successfully', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
    
    expect(response.ok()).toBe(true);
    const responseData = await response.json();
    expect(responseData).toHaveProperty('id', 1);
    expect(responseData).toHaveProperty('title');
    expect(responseData).toHaveProperty('body');
  });

  test('should create a post successfully', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    });
    
    expect(response.ok()).toBe(true);
    const responseData = await response.json();
    expect(responseData).toHaveProperty('id');
    expect(responseData).toHaveProperty('title', 'foo');
    expect(responseData).toHaveProperty('body', 'bar');
  });

});
