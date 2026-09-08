import axios from "axios";
import sessionState, { store } from "../store/session.state";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000
})

axiosInstance.interceptors.request.use((config) => {
    if(store.get(sessionState).token) {
        config.headers.Authorization = 'Bearer ' + store.get(sessionState).token
    }
    return config
})

export default axiosInstance