import axios from "axios";

const api = axios.create({
  baseURL: "http://10.2.14.20:5000/api/",
});

export default api;
