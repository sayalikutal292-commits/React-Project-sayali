import { useState, useEffect } from "react"
import { API_URL } from "./constants"
const useRestaurantList = () =>{

    const[restoList, setRestoList] = useState([]);

    useEffect(() =>{
        fetchData();
    }, [])

    const fetchData = async() =>{
        const data = await fetch(API_URL + "/listRestaurants");
        const json = await data.json();
        setRestoList(json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return restoList;
}

export default useRestaurantList