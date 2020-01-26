import React from 'react'
import { withRouter } from 'react-router-dom'

const LogoutButton = ({history}) => {
  const onLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN)
    history.push('/login')
  }
  return <button onClick={onLogout}>Logout</button>
}

export default withRouter(LogoutButton)