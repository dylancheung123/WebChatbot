import React from 'react'
import { Link } from "react-router-dom"
import { useOktaAuth } from '@okta/okta-react'

const Header = () => {
  const { oktaAuth, authState } = useOktaAuth()

  const login = async () => oktaAuth.signInWithRedirect('/')
  const logout = async () => oktaAuth.signOut('/')

  return (
    <div className='header'>
      <div className="link-container">
        <Link className="nav-link" to="/">Home</Link>
        <div className="split"> / </div>
        <Link className="nav-link" to="/terms">Terms of Service</Link>
      </div>
      <div className='loginlogout'>
        {
          !authState.isAuthenticated ? 
          <button onClick={login}>Login</button> :
          <button onClick={logout}>Logout</button>
        }
      </div>
    </div>
  )
}

export default Header