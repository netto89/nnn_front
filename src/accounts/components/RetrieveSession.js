import _ from 'lodash/fp'
import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { retrieveSession } from '../routines'

const RetrieveSession = ({ currentUser, retrieveSession, location }) => {
  const locationPath = _.path('state.from.pathname')(location)
  if (currentUser) return <Redirect to={locationPath || '/'} />
  else retrieveSession()
  return "Loading app..."
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ retrieveSession }, dispatch)
})
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(RetrieveSession)
