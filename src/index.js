import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import './index.css';

import AppRoutes from './AppRoutes'

const App = () => (
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
)

var mountNode = document.getElementById('root')
ReactDOM.render(<App />, mountNode)
