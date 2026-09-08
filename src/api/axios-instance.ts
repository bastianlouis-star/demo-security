import axios from "axios";
import sessionState, { store } from "../store/session.state";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000
})

// permet d'automatiser l'ajout du token dans les headers
axiosInstance.interceptors.request.use((config) => {
    if(store.get(sessionState).token) {
        config.headers.Authorization = 'Bearer ' + store.get(sessionState).token
    }
    return config
})

export default axiosInstance