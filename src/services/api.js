import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.255.2.55:3333',
});

export default api;