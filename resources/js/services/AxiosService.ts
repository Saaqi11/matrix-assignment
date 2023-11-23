import axios from "axios";

const ApiService = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    timeout: 10000,
});

export default ApiService;
