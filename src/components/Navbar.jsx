import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
   <nav className='nav_container'>
   
        <div>
            <img src="https://www.liblogo.com/img-logo/max/fi7110f024-fiverr-logo-fiverr-logo-icon-in-vector-logo.png" alt="" />
        </div>

        <ul className='nav_items_container'>

        <li>Fiverr Pro</li>
        <li>Explore</li>
        <div>
            English
        </div>
        <li>Become a Seller</li>
        <li>Sign In</li>
        <li>Join</li>
        </ul>
   
   </nav>
  )
}

export default Navbar