import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useStore } from '../../Domain/Stores/store'
import { getRoutes } from '../../Domain/Utils/GetRoutes'

const RouterWrapper: React.FC = () => {
  const { AuthStore } = useStore()
  const [router, setRouter] = useState<any>(null)


  useEffect(() => {

    var routes = [...getRoutes().map(item => {
      return {
        element: item.component,
        path: item.path,
      }
    })]
    setRouter(createBrowserRouter(routes));
  }, [AuthStore.token])

  return (
    <div>
      <p>{AuthStore.token}</p>
      {router != null && <RouterProvider router={router} />}
    </div>
  )
}

export default  observer(RouterWrapper)