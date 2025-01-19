import axios from "axios";

export const api = axios.create({
    baseURL: 'https://movie-backend-d6vo.onrender.com/api',
    withCredentials: true
});

// api.defaults.headers.post['Content-Type'] = "application/json";