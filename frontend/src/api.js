import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor to include the token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
