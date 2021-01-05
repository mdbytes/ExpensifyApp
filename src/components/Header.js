import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { NavLink } from 'react-router-dom'

export const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Expensify App</h1>

      <ul>
        <li>
          <NavLink activeClassName='is-active' to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/create'>
            New
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/help'>
            Help
          </NavLink>
        </li>
      </ul>
      <button onClick={startLogout}>Logout</button>
    </header>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
