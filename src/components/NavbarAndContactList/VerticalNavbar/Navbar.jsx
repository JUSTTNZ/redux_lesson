import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
        <a href='' className='link'>
            <i className='fa-solid fa-address-book'></i>
            <div>
                <h2>All contacts</h2>
                <p>10 contacts</p>
            </div>
        </a>
        </li>
        
      </ul>
      <ul>
        <li>
        <a href='' className='link'>
            <i className='fa-solid fa-heart'></i>
            <div>
                <h2>Favorites</h2>
                <p>10 contacts</p>
            </div>
        </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar
