import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './views/components'
import { Home, Registration } from './views/pages'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Registration} />
      </Switch>
    </Router>
  )
}

export default App
