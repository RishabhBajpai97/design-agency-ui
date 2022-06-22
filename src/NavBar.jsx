import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <div className='logo-content'>Power <span className='pattern'><img src="/pattern.png" alt="" /></span></div>
      </div>
      <div className='menu'>
        <ul className='menu-list'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar