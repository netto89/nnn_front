import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

import { APP_TOKEN } from './constants'

import Home from './Home'

export const PrivateRoutes = ({ currentUser, location }) => {
  const token = localStorage.getItem(APP_TOKEN)

  if (!token)
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />
  if (!currentUser)
    return (
      <Redirect
        to={{ pathname: '/retrieveSession', state: { from: location } }}
      />
    )

  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  )
}
export default compose(
  withRouter,
  connect(({ currentUser }) => ({
    currentUser
  }))
)(PrivateRoutes)
