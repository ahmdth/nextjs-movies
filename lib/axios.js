import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.API_URL,
  params: {
    api_key: process.env.APP_KEY
  }
})

export default axios
