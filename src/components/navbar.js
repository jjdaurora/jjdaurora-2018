import React from 'react';
import Link from 'gatsby-link';

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
    <div className="list_nav-list">
      <h1 className="list_nav-list-item">JJ D'Aurora</h1>
      <div className="list_nav-list-tagline">
        <div>developer ~ writer  ~ learner</div>
      </div>
    </div>
</nav>
)

export default NavBar;