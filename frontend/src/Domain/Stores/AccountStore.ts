import { AxiosError } from "axios";
import { action, makeAutoObservable, observable } from "mobx";
import { AccountApi } from "../Api/Requests/Account";
import { ILoginRequest } from "../Models/Interfaces/API/ILoginRequest";
import { IRegisterRequest } from "../Models/Interfaces/API/IRegisterRequest";

export default class AuthenticationStore {
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }


  @action async register(request: IRegisterRequest) {

    let res = await AccountApi.register(request);
    console.log(res)
  }

  @action async login(request: ILoginRequest) {
    try {
      let res = await AccountApi.login(request);
      
      if (res.data) {
        this.token = res.data
      }
    } catch (error) {
      var er = error as AxiosError;
      console.log(er.message)
    } finally {
    }
  }

}