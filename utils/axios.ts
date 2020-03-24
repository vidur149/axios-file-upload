import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://3.6.52.192:3010",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
