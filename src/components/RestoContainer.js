import RestoCard from "./RestoCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import userContext from "../utils/UserContext";

const RestoContainer = () => {
    // React state is react variable. which is superpowerfull , it is hook 
    const [searchText, setSearchText] = useState("");  // its a simple javascript varaible
    const [filteredRestoList, setFilteredRestoList] = useState(useRestaurantList());  // its a simple javascript varaible
    const onlineStatus = useOnlineStatus();
    const restoList = useRestaurantList();
    const {loggedinUser, setUserName} = useContext(userContext);

    useEffect(()=>{
        setFilteredRestoList(restoList)
    }, [restoList])

    if(onlineStatus === false) return <h1>Looks Like you are offline!</h1>
    return (
        restoList.length === 0 ? <Shimmer /> :(
            <div>
                <div className="flex justify-between mb-4">
                    <div className="mx-6">
                        <input type="text" className="bg-white border-1 border-gray-300 rounded-2xl p-3 mx-3" placeholder="Search for restaurants..." value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}></input>
                        <button className="bg-blue-300 rounded-xl text-white py-3 px-6 mr-6 cursor-pointer" onClick={()=>{
                            const filteredResto = restoList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestoList(filteredResto);    
                        }}>Search</button>
                    </div>
                    <div className="mx-9">
                        <button className="bg-green-200 rounded-xl px-3 py-3 cursor-pointer" onClick={() => {
                            const filterResto = restoList.filter((restaurant) => restaurant.info.avgRating > 4.5)
                            setFilteredRestoList(filterResto);
                        }} >Top Rated Restaurants</button>
                    </div>
                     <div className="mx-9">
                        <label>User Name : </label>
                       <input className="border border-black p-2 rounded-2xl" value={loggedinUser}
                       onChange={(e)=> setUserName(e.target.value)}  />
                    </div>
                </div>
                <div className="mt-3 flex justify-between flex-wrap">   
                {filteredRestoList.map((restaurant) => (
                    <Link to={'/restaurant/'+ restaurant.info.id} key={restaurant.info.id} >
                        <RestoCard resto={restaurant} />
                    </Link>
                ))}
                </div>
            </div>
        )
    );
};

export default RestoContainer;