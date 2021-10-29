import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.igdb.com/v4/games"
})

export default instance;