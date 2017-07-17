import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './dashboard'
import Settings from '../components/settings'

import '../styles/components/app.styl'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className='container'>
      <Link to='/' className='logo'>LOGO</Link>

      <Link to='/settings'>Settings</Link>
      <Link to='/'>Dashboard</Link>
    </nav>
  </header>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string '/'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/settings' component={Settings} />
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
