import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        contentType: 'application/json'
    },
    timeout: 60000
})

export default axiosInstance