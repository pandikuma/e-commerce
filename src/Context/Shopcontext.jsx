import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'


export const Shopcontext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopcantextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'post',
                headers:{
                    Accept:'application/from-data',
                    'Content-Type':'application/json',
                    'auth-token':localStorage.getItem('auth-token')
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'post',
                headers:{
                    Accept:'application/from-data',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }    
        
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = all_product.find((product)=>product.id===Number(item))
                        totalAmount += itemInfo.new_price*cartItems[item];
                    }
            }
            return totalAmount
        }
        const getTotalCartItems = () =>{
            let totalItem = 0;
            for(const item in cartItems)
                {
                    if(cartItems[item]>0)
                        {
                            totalItem+= cartItems[item];
                        }
                }
                return totalItem
        }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>

    )
}

export default ShopcantextProvider