import { createContext, useContext } from "react";
import AuthenticationStore from "./AccountStore";

interface Store{
  AuthStore:AuthenticationStore
}

export const store:Store ={
  AuthStore: new AuthenticationStore()
}


export const StoreContext = createContext(store)

export function useStore(){
    return useContext(StoreContext);
}