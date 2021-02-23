import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth } from '@okta/okta-auth-js'

import Page from './components/Page/Page'
import Home from './components/Home/Home'
import Terms from './components/Terms/Terms'
import './styles.css'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-41785380.okta.com/oauth2/default',
  clientId: '0oa7tezpr9LWYhTlP5d6',
  redirectUri: window.location.origin + '/login/callback'
});

const App = () => (
  <Router className='router'>
    <Security oktaAuth={oktaAuth}>
      <Route path='/' render={() => Page(Home)} exact={true}/>
      <SecureRoute path='/terms' render={() => Page(Terms)}/>
      <Route path='/login/callback' component={LoginCallback} />
    </Security>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'))
