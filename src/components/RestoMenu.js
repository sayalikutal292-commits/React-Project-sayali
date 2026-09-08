
import  useRestaurantData  from '../utils/useRestaurantData'
import { useParams } from 'react-router-dom';
import { CDN_RESTO_URL } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestoMenu = () => {
    const{restId} = useParams();
    const restInfo = useRestaurantData(restId)
    const[showIndex, setShowIndex] = useState(null)
    const[showItem , setShowItem] = useState(true)
    
    if(restInfo === null) return(<div>Loading...</div>)

    const{name, cuisines, avgRatingString, totalRatingsString, cloudinaryImageId } = restInfo?.cards[2]?.card?.card?.info
    const categories = restInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className='w-9/12 mx-auto'>
            <div className='mb-4'>
                <h1 className='text-4xl font-bold mb-2'>{name}</h1>
                <p className='text-gray-600 font-semibold'>
                    {cuisines.map((item)=> (
                        <span key={item}>{item + ", "}</span>
                    ))}
                </p>
            </div>
            
            <p className='font-semibold'>{"❇️ " +avgRatingString}{"(" + totalRatingsString + ")"} </p>
            <div className='mt-4'>
                <img className='w-200 rounded-lg' src={CDN_RESTO_URL+ cloudinaryImageId} alt={name}></img>
            </div>
            <div className='mt-10'>
                {/* Category accordian */}
                {categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={index === showIndex &&  showItem}
                        setShowIndex ={() => {
                            setShowIndex(index)
                            if(index === showIndex){
                                setShowItem(!showItem)
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
export default RestoMenu