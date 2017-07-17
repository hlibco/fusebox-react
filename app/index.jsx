import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import App from './containers/App.jsx'

// This demo uses a BrowserRouter instead of HashRouter.
// Make sure all urls can be mapped to the index.html
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
