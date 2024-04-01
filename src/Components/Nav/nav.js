import React from "react";
import logo from '../../Util/icons_assets/Logo.svg';
import './nav.css'
const Nav=()=>{

    const links = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '#About' },
        { text: 'Menu', url: '#Menu' },
        { text: 'Reservation', url: '/Reservation' },
        { text: 'Order Online', url: '/Order Online' },
        { text: 'Log In', url: '/Log in' },
       ];
     return (
        <nav className="navigation-container">
            <div className="">
          <img className="logo" src={logo} alt="logo"></img>
          </div>
    
          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
    )
}

export default Nav;