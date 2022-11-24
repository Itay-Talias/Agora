import React from "react";
import {useDispatch} from "react-redux";
import "../style/ItemCard.css"
import {
    removeItem,changePrice
} from "../app/InventoryReducer";
import { useState } from "react";



function ItamCard(props) {
    const dispatch = useDispatch();
    const [price,setPrice]=useState(props.item.price)

    const changePriceHandler=(e)=>{
        setPrice(e.target.value)
        dispatch(changePrice({id:props.item.id,price:e.target.value}))
    }

    return( 
        <div className="item-card">
            <div className="text-card">
                <h4>{props.item.title}</h4>
                <input className="price" value={price} onChange={changePriceHandler}/>
                <button className="itamCard-buy-button" onClick={()=>dispatch(removeItem(props.item.id))}>Buy</button>
            </div>
        </div>
        );
}

export default ItamCard;
