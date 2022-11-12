import { observer } from 'mobx-react-lite';
import  { useEffect, useState } from 'react';
import RouteWrapper from './Components/RouteWrapper/RouteWrapper';
import { EchoApi } from './Domain/Api/Requests/echo';
import { store } from './Domain/Stores/store';

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.AuthStore.token])

  return (
    <div className="App">
      <p>{store.AuthStore.token}</p>
      <h1>None Auth - {serverNoneAuthStatus}</h1>
      <h1>Auth -  {serverStatus}</h1>
      <RouteWrapper/>
    </div>
  );
}

export default observer(App);
