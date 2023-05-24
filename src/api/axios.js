import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "69c5c00f36fe5c19b5a6c65a8d9c7941",
        language: "ko-KR" 
    }
});

export default instance;