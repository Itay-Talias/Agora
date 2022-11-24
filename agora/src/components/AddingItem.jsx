import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {
    addItem
} from "../app/InventoryReducer";
import "../style/AddingItem.css"



function AddingItem() {
    const dispatch = useDispatch();
    const [item,setItem]=useState({title:"",price:0})

    const inputHandler=(e)=>{
        const newInputValues={...item}
        let newValue=e.target.value
        newInputValues[e.target.name]=newValue
        setItem(newInputValues)
}

    return( 
        <div className="input-item">
            <input name="title" className="product-name" placeholder="PRODUCT NAME" onChange={inputHandler}/>
            <input name="price" type="number" className="product-price" placeholder="PRICE" onChange={inputHandler}/>
            <button className="add-button" onClick={()=>{dispatch(addItem(item))}}>Add</button>
        </div>
        );
}

export default AddingItem;
