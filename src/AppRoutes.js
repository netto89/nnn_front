import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Login, RetrieveSession } from './accounts/components'
import PrivateRoutes from './PrivateRoutes'
import { Redirector } from './Redirector'

export const AppRoutes = ({ redirectUrl, location }) => (
  <Switch>
    {redirectUrl && <Redirector redirectUrl={redirectUrl} />}
    <Route path="/login" component={Login} />
    <Route path="/retrieveSession" component={RetrieveSession} />
    <PrivateRoutes />
  </Switch>
)

export default compose(
  withRouter,
  connect(({ redirectUrl }) => ({ redirectUrl }))
)(AppRoutes)
