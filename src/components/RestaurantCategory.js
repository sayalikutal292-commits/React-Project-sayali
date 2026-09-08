import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () =>{
        setShowIndex();
    }
    return(
        <div>
            {/* Accordian Header */}
            <div className="w-7/12 bg-gray-100 shadow-lg p-4 mb-2 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian body */}
            {
                showItems && <ItemList list={data?.itemCards}/>
            }
            
        </div>
    )
}

export default RestaurantCategory