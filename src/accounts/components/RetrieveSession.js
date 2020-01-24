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
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("images/background.jpg")',
        backgroundSize: 'cover'
      }}
    >
      <div>
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'Coda',
            fontSize: '120px',
            margin: '0px',
            color: '#344b80',
            fontWeight: 'normal'
          }}
        >
          Focus
        </h2>
        <h5
          style={{
            textAlign: 'right',
            fontFamily: 'Coda',
            fontSize: '35px',
            marginTop: '-60px',
            marginBottom: '10px',
            marginRight: '5px',
            color: 'white',
            fontWeight: 'bolder'
          }}
        >
          manager
        </h5>
      </div>
    </div>
  )
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
