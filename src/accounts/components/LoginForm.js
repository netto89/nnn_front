import React, { useState } from 'react'

export const LoginForm = (
  {
  login,
  // authenticating,
  // loginError,
}
) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = () => login({username, password})
    return <>
      {/* <input  />
      {loginError && <>Login error.</>} */}
      <h4>Login</h4>
      Username: <input 
        type='text' 
        value={username} 
        onChange={({target: {value}})=>setUsername(value)}
      /> <br/>
      Password: <input 
        type='password' 
        value={password} 
        onChange={({target: {value}})=>setPassword(value)}
      /> <br/>
      <button onClick={onSubmit}>Submit</button>
    </>
}
