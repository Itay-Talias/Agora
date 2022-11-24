import React from "react";
import { useSelector } from "react-redux";
import {selectAgoraItems,selectItemsLength} from "../app/InventoryReducer";
import ItemCard from "./ItemCard";
import AddingItem from "./AddingItem"
import "../style/Items.css"


function Items() {
    const items =useSelector(selectAgoraItems)
    const itemsLength=useSelector(selectItemsLength)
    return <div className="items">
        <h1 className="title-items">The number of Items is {itemsLength}</h1>
        <AddingItem/>
        {items.map((t,i)=><ItemCard key={i} item={t}/>)}
            </div>;
}

export default Items;
