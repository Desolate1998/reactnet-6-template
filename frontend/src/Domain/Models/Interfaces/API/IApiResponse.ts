import { IResponseException } from "./IResponseException";
export interface IApiResponse<T>{
  data?:T;
  isSuccessful:boolean;
  errors?:IResponseException[]
}