import axios from "axios"

export default axios.create({
    // baseURL: "http://192.168.89.63:9090", // for test
    // baseURL: "http://localhost:9090",
    baseURL: "http://newpdfprd2-pdf-admintool-4.d3.clouz.io", // for test
    header:{
        "Content-type":"application/json",
    }
})