import axios, { AxiosResponse } from "axios";
import appConfig from "../../config.json"
import { IApiResponse } from "../Models/Interfaces/API/IApiResponse";
import { store } from "../Stores/store";
axios.defaults.baseURL = appConfig.ApiDetails.Route;
const responseBody = <T>(response: AxiosResponse<IApiResponse<T>>) => response.data;


axios.interceptors.request.use(config => {
var token  = store.AuthStore.token;
    if(config.headers){
      config.headers.Authorization = `Bearer ${token}`
    }
  return config;
});

export const requests = {
  get: <T>(url: string) => axios.get<IApiResponse<T>>(url).then(responseBody),
  post: <T>(url: string, body:any) =>axios.post<IApiResponse<T>>(url, body).then(responseBody),
  put: <T>(url: string, body:any) =>axios.put<IApiResponse<T>>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<IApiResponse<T>>(url).then(responseBody)
}