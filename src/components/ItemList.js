import { CDN_RESTO_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const ItemList = (list) =>{
    const dispatch = useDispatch();
    const handleAdd = (item) =>{
        // dispatch the action 
        dispatch(addItem(item)) 
    }
    return(
        <div className="w-7/12 p-4 mb-4">
            {
                list.list.map((item)=>(
                    <div key={item?.card?.info?.id} className="mb-8">
                        <div  className="flex justify-between">
                            <div>
                                <h1 className="font-bold">{item?.card?.info?.name}</h1>
                                <span className="font-semibold text-gray-500">{"₹" + item?.card?.info?.price/100}</span>
                                <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="relative">
                                <img className="w-70" src={CDN_RESTO_URL + item?.card?.info?.imageId} 
                                alt={item?.card?.info?.name}></img>
                                <button className="bg-white text-black border border-white rounded-md
                                p-2 bottom-0.5 left-1/3 absolute" onClick={() =>  handleAdd(item)}>ADD➕</button>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-100 mt-4"></div>
                    </div>
                ))
            }
        </div>
    )
} 
export default ItemList
