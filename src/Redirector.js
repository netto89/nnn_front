import _ from 'lodash/fp'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

/** Routines */
import { createRoutine } from 'redux-saga-routines'

export const cleanRedirect = createRoutine('CLEAN_REDIRECT')
export const redirect = createRoutine('REDIRECT')
export const redirectLogin = createRoutine('REDIRECT_LOGIN')

/** Reducer */

export const redirectUrl = (state = '', { type, payload }) => {
  if (type.endsWith('/FAILURE') && _.get('status')(payload) === 401) {
    localStorage.removeItem(process.env.REACT_APP_TOKEN)
    return '/login'
  }
  switch (type) {
    case cleanRedirect.TRIGGER:
      return ''
    case redirectLogin.TRIGGER:
      return '/login'
    default:
      return state
  }
}

/** Component */
const RedirectorComponent = ({ redirectUrl, cleanRedirect, location }) => {
  useEffect( cleanRedirect, [])
  return <Redirect to={{ pathname: redirectUrl, state: { from: location } }} />
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ cleanRedirect }, dispatch)
})
export const Redirector = compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(RedirectorComponent)
