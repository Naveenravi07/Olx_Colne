import { baseUrl } from "../constants/apiDetails";
import axios from "axios";

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance