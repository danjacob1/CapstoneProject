import React from "react";
import logo from '../../Util/icons_assets/Logo.svg';
const Nav=()=>{

    return(
        <>
          <nav className="Navigation_Bar">
                  <img src={logo} alt="Logo"/>
                <ul className="Nav_List">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Menu</a></li>
                      <li><a href="#">Reservationa</a></li>
                      <li><a href="#">Order online</a></li>
                      <li><a href="#">Log in</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;