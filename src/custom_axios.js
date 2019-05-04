import axios from "axios";

const instance = axios.create({ 
    baseURL : "https://vuejs-axios-blog-e276e.firebaseio.com"
 })

//  instance.defaults.headers.common("")

export default instance;