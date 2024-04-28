import React from "react";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../../Util/icons_assets/Logo.svg';
import cartGif from '../../Util/icons8-carrito-de-compras.gif';
import './nav.css'
import CartModal from "./CartModal";
import { useState } from "react";
import { CartContext } from "../../CartContext/cart";
import { useContext } from "react";


const Nav=()=>{

   const[isModalOn,setModalOn]=useState(false);
   const{cartItems}=useContext(CartContext);

   const toggleMode=()=>{
          setModalOn(!isModalOn);
   }
    const links = [
        { text: 'Home', url: '/#home' },
        { text: 'About', url: '/#About' },
        { text: 'Menu', url: '/#Specials' },
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
           
          {<a href="#" onClick={()=>{toggleMode()}}><img src={cartGif} className={`cart ${cartItems.length > 0 ? 'cart' : 'invisible'}`}alt="Cart"></img></a>}
            {cartItems.length>0 && isModalOn && <CartModal onClose={toggleMode}/> }
           
        </nav>
        
    )
}

export default Nav;