import React from 'react'

import '../styles/components/dashboard.styl'

const twitterIcon = require('../images/twitter-128x128.svg')

class Dashboard extends React.Component {
  render () {
    return (
      <div className='container dashboard'>
        <h1>Dashboard</h1>
        <p>
          This is the dashboard.
          <br />
          <br />
          Share your love on <a href='' target='_blank'>Twitter <img src={twitterIcon} className='twitter' /></a>
        </p>
      </div>
    )
  }
}

export default Dashboard
