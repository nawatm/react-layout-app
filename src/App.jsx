import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import {Route,Switch} from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default App
 