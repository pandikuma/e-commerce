import React from "react";
import './NewCollection.css'
import collection from '../Assets/new_collections'
import Item from "../Items/Item";


const NewCollection = () => {
    return (

        <div className="new-collection">
            <h1>New Collection</h1>
            <hr />
            <div className="collections">
                {collection.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} ></Item>
                })}
            </div>
        </div>
    )
}

export default NewCollection