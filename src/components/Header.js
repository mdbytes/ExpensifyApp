import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Expensify App</h1>

      <ul>
        <li>
          <NavLink activeClassName='is-active' exact={true} to='/'>
            Home
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
    </header>
  )
}

export default Header
