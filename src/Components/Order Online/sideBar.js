
import React from 'react';
import './sideBar.css';

import { HashLink } from "react-router-hash-link";

import cake from "../../Util/icons8-cake-50.png"
import drink from "../../Util/icons8-drink-50.png"
import fish from "../../Util/icons8-fish-50.png"
import grill from "../../Util/icons8-grill-30.png"
import salad from "../../Util/icons8-salad-50.png"
import salami from "../../Util/icons8-salami-50.png"
import wine from "../../Util/icons8-wine-64.png"
import pasta from "../../Util/icons8-pasta-64.png"


const sections = [
    { text: "Antipasti", logo: salami, url: "#Antipasti" },
    { text: "Pasta", logo: pasta, url: "#Pasta" },
    { text: "Grill", logo: grill, url: "#Grill" },
    { text: "Fish", logo: fish, url: "#Fish" },
    { text: "Salads", logo: salad, url: "#Salads" },
    { text: "Deserts", logo: cake, url: "#Deserts" },
    { text: "Wine", logo: wine, url: "#Wine" },
    { text: "Soft Drinks", logo: drink, url: "#Drinks" }
  ];
  


const Sidebar=()=>{

    return(
        <>
        <div className='sidebar-container'>
             <ul className='sidebar'>
                
                {sections.map((item,index)=>{
                  return(
                        <li key={index}>
                             <img src={item.logo} alt='logo'></img>
                         <HashLink smooth to={item.url}>{item.text}</HashLink>
                        </li>)
                   
                })}
            
                </ul>
                </div>
        </>
    )
}

export default Sidebar;