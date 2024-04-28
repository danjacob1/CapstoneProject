import React from "react";
import restaurant from "../../Util/icons_assets/restaurant.jpg";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../Footer/footer.css'


const navigation=[
{ text: 'Home', url: '/#home' },
{ text: 'About', url: '/#About' },
{ text: 'Menu', url: '/#Specials' },
{ text: 'Reservation', url: '/Reservation' },
{ text: 'Order Online', url: '/Order Online' },
{ text: 'Log In', url: '/Log in' }]
;
const contact = [
    { text: "Address", value:"London EC4R 9HA, Regne Unit" },
    { text: "Phone", value: "+1234567890" },
    { text: "Email", value: "littlelemon@example.com" }
  ];
 
const social_media=[{
    text:"Facebook", url:"https://www.facebook.com"},{
    text:"Instagram", url:"https://www.instagram.com"},
   { text:"Twitter", url:"https://www.twitter.com"
}]
//Logic for each list 
//NAVIGATION
const ListNavigation=(props)=>{
return(
        <>
             <div className="list-container">
              <h1 className="list-title">{props.title}</h1>
              <ul className="footer">
                  {props.arraylist.map((item)=>{
                    return(
                    <li key={item}>
                         {item.text==="Reservation"|| item.text==="Order Online" || item.text==="Log in"?
                (<Link to={item.url}>{item.text}</Link>):
                (<HashLink smooth to={item.url}>{item.text}</HashLink>)}
                    </li>
                    )
                    })
                  }
              </ul>

             </div>
        </>
    )
}

//CONTACT
const ListContact=(props)=>{
return(
    <>
          <div className="list-container">
            <h1 className="list-title">{props.title}</h1>
            <ul className="footer">
                {
                    props.arraylist.map(item=>{
                        return(
                           <li key={item}>
                                {item.text==="Email"?
                                (
                               <a href={`mailto:${item.value}`}>{item.value}</a>
                            ):item.text==="Phone"?(
                                <a href={`tel:${item.value}`}>{item.value}</a>
                            ):item.text==="Address"?(
                                <a
                                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`}
                                >
                                   {item.value}
                                </a>
                            ) :null}
                                
                     </li>
                        )
                    })
                }
            </ul>
          </div>

    </>
)
}

//SOCIALS
const ListSocials=(props)=>{

return(
    <>
          <div className="list-container">
              <h1 className="list-title">{props.title}</h1>
              <ul className="footer">
                  {props.arraylist.map((item)=>{
                    return(
                    <li key={item}>
                         <a href={item.url}>{item.text}</a>
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
      <ListNavigation title="Navigation" arraylist={navigation}/>
      <ListContact title="Contact" arraylist={contact}/>
      <ListSocials title="Socials"  arraylist={social_media}/>
     </footer>
  </>
 )

}

export default Footer;