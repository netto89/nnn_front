import React, { useState } from 'react'

export const LoginForm = (
  {
  login,
  authenticating,
  loginError,
}
) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = () => login({username, password})
    return <>
      <h1>Login</h1>
      Username: <input 
        disabled={authenticating}
        type='text' 
        value={username} 
        onChange={({target: {value}})=>setUsername(value)}
      /> <br/>
      Password: <input 
        disabled={authenticating}
        type='password' 
        value={password} 
        onChange={({target: {value}})=>setPassword(value)}
      /> <br/>
      {loginError && <p>Login error</p>}
      <button onClick={onSubmit} disabled={authenticating}>Submit</button>
    </>
}
