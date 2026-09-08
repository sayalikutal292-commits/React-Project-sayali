import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useRestaurantData = (restId) => {
    const[restInfo, setRestInfo] = useState(null)
    useEffect(() =>{
        fetchMenu();
    }, [])
    const fetchMenu = async() =>{
        const data = await fetch(API_URL + "/listRestaurantMenu/"+ restId);
        const json = await data.json()
        setRestInfo(json.data)
    }
    return restInfo;
}
export default useRestaurantData;