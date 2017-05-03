import React from 'react'
import { Route } from 'react-router-dom'
import AsyncRoute from './AsyncRoute'

if (global) {
  global.System = { import() {} }
}

const App = () => (
  <div className="app">
    <Route
      exact
      path="/"
      component={props => <AsyncRoute
        props={props}
        loadingPromise={System.import('./Landing')}
      />}
    />
  </div>
)

export default App
