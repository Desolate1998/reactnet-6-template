import React, { useEffect, useState } from 'react';
import { EchoApi } from './Domain/Api/Requests/echo';

function App() {
const [serverStatus, setServerStatus] = useState<string>('offline')

  useEffect(() => {
     EchoApi.echo().then(response =>{ 
        
      if(response.isSuccessful){
          setServerStatus(response.data!);
        }
     });
  }, [])
  
  return (
    <div className="App">
      <h1>{serverStatus}</h1>
    </div>
  );
}

export default App;
