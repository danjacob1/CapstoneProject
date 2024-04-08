import React from "react";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../../Util/icons_assets/Logo.svg';
import './nav.css'
const Nav=()=>{

    const links = [
        { text: 'Home', url: '#home' },
        { text: 'About', url: '/home#About' },
        { text: 'Menu', url: '/home#Specials' },
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
                {links.text==="Reservation"|| links.text==="Order Online" || links.text==="Log in"?
                (<Link to={links.url}>{link.text}</Link>):
                (<HashLink smooth to={link.url}>{link.text}</HashLink>)}
              </li>
            ))}
          </ul>
        </nav>
    )
}

export default Nav;