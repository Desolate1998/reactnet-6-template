import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { store } from '../Domain/Stores/store';

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>  <h1>Login</h1>
    <div style={{
      backgroundColor: '#2a9d8f',
      padding: 20,
      display: 'flex',
      flexDirection: 'column', margin: 20
    }}>
      <input onChange={(value)=>{
        setEmail(value.target.value)
      }} placeholder='Email' />
      <br />
      <input onChange={(value)=>{
        setPassword(value.target.value)
      }} placeholder='Password' type="Password" />
      <br />

      <button onClick={()=>store.AuthStore.login({
        email:email,
        password:password
      })
    }
      >Login</button>
      <a href='Register'>Register</a>
    </div></div>
  )
}

export default observer(Login)