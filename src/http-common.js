import axios from "axios"

export default axios.create({
    baseURL: "http://192.168.89.63:9090", // for test
    // baseURL: "http://localhost:9090",
    header:{
        "Content-type":"application/json",
    }
})