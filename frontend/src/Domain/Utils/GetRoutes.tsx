import { Home } from "../../Views/Home";
import { Login } from "../../Views/Login";
import { Register } from "../../Views/Register";
import { IRoute } from "../Models/Interfaces/Utils/IRoute";
import { store } from "../Stores/store";

export function getRoutes(): IRoute[] {
  let routes: IRoute[] = [];
  
  if (store.AuthStore.token === ''){
    routes.push({
      component:<Register/>,
      mapped:true,
      name:'Register',
      path:'/register'

    })

    routes.push({
      component:<Login/>,
      mapped:true,
      name:'Login',
      path:'/login'

    })
  }else{
    routes.push({
      component:<Home/>,
      mapped:true,
      name:'Home',
      path:'*'

    })
  }
  return routes;
}
