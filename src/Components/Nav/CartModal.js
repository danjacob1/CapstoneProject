import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/cart.js";
import './CartModal.css'




const CartModal=()=>{

    const{cartItems,addToCart,removeFromCart,clearCart,cartTotal}=useContext(CartContext);
    
    return(
        <>
            <section className="cart-container">
                <div className="cart">
                     <h1 className="cart-titel"> Your Cart Items</h1>
                     <div  className="cart-heading">
                           <p> Product</p>
                        <div className="right-heading">
                           <p> Price</p>
                           <p>Quantity</p>
                           <p>Subtotal</p>
                        </div>
                     </div>
                    {
                       cartItems.map((items)=>{
                        return(
                       
                           <div className="cart-item"> 
                                 <img alt="dish" src={items.logo}></img>
                                 <p>{items.item}</p>
                                 <div className="cart-item-right">
                                       <p>{`${items.cost}£`}</p>
                                       <button onClick={()=>{
                                        removeFromCart(items);
                                       }}>-</button>
                                       <p>{items.quantity}</p>
                                       <button onClick={()=>{
                                        addToCart(items);
                                       }}>+</button>

                                       <p>{`${items.totalItemCost}£`}</p>
                                 </div>
                            </div>
                           
                      
                        )
                       })
                    }
                    {
                        cartItems.length>0 ? 
                        (<>
                          <div className="cart-items-bottom">
                                <p>{`Total:${cartTotal()}£`}</p>
                                <button onClick={()=>{
                                    clearCart();
                                }}>Clear Cart</button>
                          </div>
                          <button>Check Out</button>
                         </>
                        ): null
                   }
             </div>
      </section>
               

        </>
    )
}

export default CartModal;