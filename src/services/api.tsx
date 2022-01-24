import axios from "axios"

const api = axios.create({
    baseURL: "https://hamburgueriajsonserver.herokuapp.com/"
})

export default api