import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory } from 'react-router'

import About from './modules/About'
import Process from './modules/Process'
import Work from './modules/Work'
import Contact from './modules/Contact'
import Foodworks from './modules/Foodworks'
import Farmigo from './modules/Farmigo'
import Amicus from './modules/Amicus'

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/process" component={Process} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/foodworks" component={Foodworks} />
      <Route path="/farmigo" component={Farmigo} />
      <Route path="/amicus" component={Amicus} />
    </Route>
  </Router>
), document.getElementById('app'))
