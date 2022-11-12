import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteWrapper from './Components/RouteWrapper/RouteWrapper';

import { EchoApi } from './Domain/Api/Requests/echo';
import { store } from './Domain/Stores/store';
import { getRoutes } from './Domain/Utils/GetRoutes';

function App() {
  const [serverStatus, setServerStatus] = useState<string>('offline')
  const [serverNoneAuthStatus, setServerNoneAuthStatus] = useState<string>('offline')

  
  useEffect(() => {
    EchoApi.echo().then(response => {
      if (response.isSuccessful) {
        setServerNoneAuthStatus(response.data!);
      }
    });
    EchoApi.echoNoneAuth().then(response => {
      if (response.isSuccessful) {
        setServerStatus(response.data!);
      }
    });
  }, [store.AuthStore.token])

  return (
    <div className="App">
      <p>{store.AuthStore.token}</p>
      <h1>None Authed - {serverNoneAuthStatus}</h1>
      <h1>Authed -  {serverStatus}</h1>
      <RouteWrapper/>
    </div>
  );
}

export default observer(App);
