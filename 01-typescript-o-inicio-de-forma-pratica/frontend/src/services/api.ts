import axios from 'axios'; // Ja vem com a tipagem
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;