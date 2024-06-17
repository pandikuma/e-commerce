import React from "react";
import './Popular.css'
import data_product from "../Assets/data";
import Item from "../Items/Item";


const Popular = () => {
    return(
        <div className="popular">
            <h1>Popular In Women</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,index)=>{
                    return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} ></Item>
                })}
            </div>
        </div>
    )
}



export default Popular