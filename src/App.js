import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { FormProvider } from './context'
import { Navbar } from './views/components'
import { Home, Registration } from './views/pages'

const App = () => {
  const [open, setOpen] = useState(false)

  const openNavHandler = () => {
    setOpen(!open)
  }

  const closeNavHandler = () => {
    setOpen(false)
  }
  return (
    <FormProvider>
      <Router>
        <Navbar open={open} openNavHandler={openNavHandler} closeNavHandler={closeNavHandler} />
        <div onClick={closeNavHandler}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Registration} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </FormProvider>
  )
}

export default App
