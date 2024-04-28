import { createContext,useState,useEffect } from "react";

export const CartContext=createContext();
export const CartProvider=({children})=>{


const [cartItems,setCartItems]=useState((localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []))

     //ADD ITEMS TO CART

     const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1,totalItemCost:(cartItem.quantity+1)*cartItem.cost}
                : cartItem
            )
          );
        } else {
          setCartItems([...cartItems, { ...item, quantity: 1 ,totalItemCost:item.cost}]);
        }
      };
    

  //REMOVE FROM CART

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 ,totalItemCost:(cartItem.quantity-1)*cartItem.cost}
            : cartItem
        )
      );
    }
  };

        const clearCart=()=>{

                setCartItems([])
        }

        const  cartTotal=()=>{
            return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0)
        }

        useEffect(() => {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
          }, [cartItems]);
          

          useEffect(() => {
            const cartItems = localStorage.getItem("cartItems");
            if (cartItems) {
            setCartItems(JSON.parse(cartItems));
            }
        }, []);

        return (
            <CartContext.Provider
              value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartTotal,
              }}
            >
              {children}
            </CartContext.Provider>
          );

    }
