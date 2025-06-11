import axios from "axios"

const url = "https://akmal-bc.karyakreasi.id";

const API = axios.create({
    baseURL: `${url}/api`,
    // baseURL: "http://127.0.0.1:8000/api",
});

export default API;

export const bookImageStorage = `${url}/storage`;
