// config.js
const API_BASE_URL = window.location.hostname.includes('localhost') 
  ? 'http://localhost:3000/api' 
  : 'https://your-render-backend-url.onrender.com/api';

export default API_BASE_URL;
