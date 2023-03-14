import axios from "axios"

export default axios.create({

    // baseURL: "http://localhost:9090",  // for local host    
    // baseURL: "http://192.168.89.63:9090", // for always test
    baseURL: "http://newpdfprd-pdf-admintool-4.d3.clouz.io", // for fusion test    

    header:{
        "Content-type":"application/json",
    }
})
