import axios from "axios";

const service = axios.create({
  // 设置 baseURL
  baseURL: "https://hacker.jt-gmall.com"
});

export default service;