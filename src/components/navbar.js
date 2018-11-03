import React from 'react'
import Link from 'gatsby-link'

const NavBar = ({ siteTitle }) => (
    // <nav>
    //   <h1><Link to="/">{siteTitle}</Link></h1>
    //     <ul>
    //       <li>
    //         <Link to="/about/">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/projects/">Projects</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact/">Contact</Link>
    //       </li>
    //     </ul>
    // </nav>
  <nav>
    <ul className="nav-container">
      <li>Home</li>
      <li>Profile</li>
      <li class="search">
        <input type="text" class="search-input" placeholder="Search"/>
    </li>
        <li>Logout</li>
   </ul>
</nav>
)

export default NavBar
