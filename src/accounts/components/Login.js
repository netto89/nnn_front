import _ from 'lodash/fp'
import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { APP_TOKEN } from '../../constants'
import { login } from '../routines'

import { LoginForm } from './LoginForm'

const Login = ({
  login,
  authenticating,
  loginError,
  location
}) => {
  const locationPath = _.path('state.from.pathname')(location)
  const token = localStorage.getItem(APP_TOKEN)
  if (token) return <Redirect to={locationPath || '/'} />

  return <LoginForm 
    authenticating={authenticating}
    loginError={loginError}
    login={login}
  />
}

const mapStateToProps = ({ currentUser, authenticating, loginError }) => ({
  currentUser,
  authenticating,
  loginError
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ login }, dispatch)
})
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login)
