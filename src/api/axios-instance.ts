import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000
})

export default axiosInstance