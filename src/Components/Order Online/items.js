import React from "react";
import { useState } from "react";
import STOCK from "./productsStock.js";
import './items.css'
import { CartContext } from "../../CartContext/cart.js";
import { useContext} from 'react'

 const Products=()=>{
   
  const[products,setProducts]=useState([]);
  const{addToCart } = useContext(CartContext)

  //SIMULATING FETCHING DATA
  function fetchData(){
    return new Promise(resolve=>{

         setTimeout(()=>{
            
           resolve(STOCK);

         },1000);
    })
  }

    fetchData().then((stock)=>{
      setProducts(stock)
      console.log("Fetched data",products)
    })
    .catch(error=>{
      console.log("Error fetching data:",error)
    })

  return(
    <>
             <div className="products">
                   {products.map(item=>(
                       <div className="products-card" key={item.id} id={item.section}>
                               <div className="image-container">
                               <img className="plate" src={item.logo} alt={item.item}></img>  
                              </div>
                            <div className="right-card">
                              <h1>{item.item}</h1>
                              <p>{item.description}</p>
                              <div className="info-card">
                                 <p>{`${item.cost}£`}</p>
                                 {item.logo2 ?
                                 (<img  src={item.logo2} alt="v/ve"></img>)
                                 :<span>---</span>
                                    }
                                  <div className="calories">
                                 <p>{`${item.calories}Kcal`}</p>
                                 </div>
                            </div>
                             <button onClick={()=>{addToCart(item)}}>Add</button>
                         </div>
                     </div>
                     )) }
             </div>
   </>
  )
}





 
const Items=()=>{
    return(
        <>  
          <section className="products-container">
                    <h1>Menu</h1>
                     <Products/>
          </section> 
        
        </>
    )
}
export default Items;