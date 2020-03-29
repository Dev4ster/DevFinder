import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seuip:3333',
});

export default api;
