import React from "react";
import restaurant from "../../Util/icons_assets/restaurant.jpg";

const navigation=["home","About","Menu","Reservation","Order Online","Log in"];
const contact=["Address","Phone","Email"];

const social_media=["Facebook","Instagram","TikTok"]

const List=(props)=>{
return(
        <>
             <div className="list-container">
              <h1 className="list-title">{props.title}</h1>
              <ul>
                  {props.arraylist.map(item=>{
                    return(
                    <li key={item}>
                         <a href={`#${item}`}>{item}</a>
                    </li>
                    )
                    })
                  }
              </ul>

             </div>
        </>
    )
}

const Footer =()=>{
 return(
  <>
      <footer className="footer-container">
       <div className="image">
           <img alt="restaurant" src={restaurant}></img>
       </div>
      <List title="Navigation" arraylist={navigation}/>
      <List title="Contact" arraylist={contact}/>
      <List title="Socials"  arraylist={social_media}/>
     </footer>
  </>
 )

}

export default Footer;