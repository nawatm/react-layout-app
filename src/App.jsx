import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"

import {Route,Switch} from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}  

export default App
 