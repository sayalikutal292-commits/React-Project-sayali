import { CDN_RESTO_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const RestoCard = ({ resto }) => {
  const restaurant = resto?.info ?? resto.info;
  const imageId = restaurant?.name !== 'Spice Kingdom' ? restaurant?.cloudinaryImageId :  "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG";
  const {loggedinUser} = useContext(userContext) 

  return (
    <div className="p-4 mx-3">
      <div className="w-90">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={imageId ? CDN_RESTO_URL + imageId : ""}
            alt={restaurant?.name || "Resto Image"}
          />    
      </div>
     
      <div className="mt-3">
        <div className="resto-title-row">
          <h3 className="font-bold">{restaurant?.name}</h3>
          <span className="rating">⭐ {restaurant?.avgRating}</span>
        </div>
        <p className="resto-desc">{restaurant?.cuisines?.join(", ")}</p>
        <div className="resto-meta">
          <span className="meta-pill mr-4">⏱ {restaurant?.sla?.slaString}</span>
          <span className="meta-pill mr-1">{restaurant?.costForTwo}</span>
          
        </div>
        <span className="meta-pill font-semibold text-gray-500">{restaurant?.areaName}</span>
        <p>user : {loggedinUser}</p>
      </div>
    </div>
  );
};

export default RestoCard;