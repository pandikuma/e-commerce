import React, { useContext } from "react";
import './Css/ShopCategory.css'
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Items/Item";


const ShopCategory = (props) => {
    const {all_product} = useContext(Shopcontext);

    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,index)=>{
                    if (props.category===item.category) {
                        return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory