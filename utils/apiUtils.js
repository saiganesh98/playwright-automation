const { request } = require('@playwright/test');

// Create a new API client
const createApiClient = () => {
  return request.newContext();
};

// Perform a GET request
const get = async (url, headers = {}) => {
  const client = createApiClient();
  const response = await client.get(url, { headers });
  return await response.json();
};

// Perform a POST request
const post = async (url, body = {}, headers = {}) => {
  const client = createApiClient();
  const response = await client.post(url, {
    data: body,
    headers,
  });
  return await response.json();
};

// Perform a PUT request
const put = async (url, body = {}, headers = {}) => {
  const client = createApiClient();
  const response = await client.put(url, {
    data: body,
    headers,
  });
  return await response.json();
};

// Perform a DELETE request
const del = async (url, headers = {}) => {
  const client = createApiClient();
  const response = await client.delete(url, { headers });
  return await response.json();
};

// Handle API response
const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw new Error(`API request failed with status ${response.status}`);
  }
};

// Export the utility functions
module.exports = {
  get,
  post,
  put,
  del,
  handleResponse,
};
