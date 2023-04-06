import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  timeout: 10000,
  baseURL: 'http://127.0.0.1:3000/api',
});


// instance.interceptors.request.use();
// instance.interceptors.response.use()



export default instance;