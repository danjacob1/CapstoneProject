import React from "react";
import restauranfood from '../../Util/icons_assets/restauranfood.jpg';
import './header.css'
import { Link} from "react-router-dom";

const Header=()=>{

    return(
        <>
          <header className="header-container"id="home">
            <div className="header-content">
            <div className="container-left">
             <h1>Little Lemon</h1>
             <p>Barcelona</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est viverra, consequat mauris vulputate, fringilla nunc. Mauris convallis in justo sed ultricies. </p>
           <Link to={"/Reservation"}><button className="reserve-btn">Reserve a table</button></Link>
            </div>
            <div className="container-right">
             <img className="restaurant" src={restauranfood} alt="restaurant"></img>
            </div>
            </div>
          </header>
    </>
    )
}

export default Header;