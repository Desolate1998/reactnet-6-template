import {ILoginRequest } from "../../Models/Interfaces/API/ILoginRequest";
import { IRegisterRequest } from "../../Models/Interfaces/API/IRegisterRequest";
import { requests } from "../agent";

const controller:string = 'account'

export const AccountApi={
  login:(data:ILoginRequest) => requests.post<string>(`${controller}/login`,data),
  register:(data:IRegisterRequest) => requests.post<any>(`${controller}/register`,data)
}