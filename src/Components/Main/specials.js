import React from "react";
import bruschetta from '../../Util/icons_assets/gourmet-5619887_640.jpg';
import salad from '../../Util/icons_assets/greek salad.jpg';
import desert from '../../Util/icons_assets/lemon dessert.jpg';
import scooter from '../../Util/icons_assets/icons8-scooter-delivery-53.png'
import './special.css' 
import { Link } from "react-router-dom";

const items = [
    {
      title: "Bruschetta",
      description: "Savor the irresistible combination of crusty bread topped with juicy tomatoes, aromatic basil, creamy mozzarella, and a drizzle of balsamic glaze—a culinary masterpiece that's both elegant and comforting.",
      image: bruschetta,
    },
    {
      title: "Greek Salad",
      description: "Transport yourself to the sunny shores of Greece with every bite of this vibrant salad, featuring crisp cucumbers, plump tomatoes, briny olives, creamy feta cheese, and tangy Greek dressing—a taste of the Mediterranean that's both wholesome and satisfying.",
      image: salad,
    },
    {
      title: "Lemon Cheesecake",
      description: "Indulge in a luscious, citrus-infused delight, complete with a velvety smooth texture and a zesty lemony finish that will leave your taste buds dancing with joy.",
      image: desert,
    }
  ];

const Cards=(props)=>{

    return(
           <>
            <div className="card-container"id="Specials" >
                {props.arraylist.map((item,index)=>(
                   < div key={index} className="card">
                  <img className="dish" alt="dish"src={item.image}></img>
                  <h1 className="dish-name"> {item.title}</h1>
                  <p className="dish-description">{item.description}</p>
                   <div className="bottom-card">
                        <p>Order a delivery now</p>
                        <img src={scooter} alt="logo"></img>
                    </div>
                 </div>
                ))}
            </div>
       </>
    );
};

const Specials=()=>{
    return(
        <>   
           <div className="special-section" id="Specials">
            <div className="top-section">
               <h1 className="section-title">Special</h1>
             <Link to={"/Order Online"}> <button className="btn">Online Menu</button> </Link> 
            </div>
           <Cards arraylist={items}/>
            </div>
      </>
    )} 

export default Specials;