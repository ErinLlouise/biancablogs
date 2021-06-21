import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Profile from './Profile'
import About from './About'
import Home from './Home'
import Connect from './Connect'
import Blog from './Blog'

function App () {
  return (
    <div>
      <Header />
      <Route path='/profile' component={Profile} />
      <Route path='/about' component={About} />
      <Route exact path='/' component={Home} />
      <Route path='/connect' component={Connect} />
      <Route path='/blog' component={Blog} />

    </div>
  )
}

export default App
