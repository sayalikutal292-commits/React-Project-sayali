import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList"
import { clearItem } from "../utils/cartSlice"


const Cart = () =>{
   const cartItem = useSelector((store) => store.cart.items)
   const dispatch = useDispatch()
    const handleClear =() =>{
        dispatch(clearItem())
    }

    return(
        <div className="mx-auto w-7/12">
            {
                cartItem.length === 0 ?(
                    <div className="text-center">
                        <h1 className="font-semibold">Cart is empty! Please Add Items to the cart</h1>
                    </div>
                    
                ) : (
                    <>
                        <h1 className="font-bold text-2xl text-center mb-15">Cart Items</h1>
                        <div className="mb-10">
                            <button className="bg-red-200 text-black border-red-200 
                            rounded-md p-3" onClick={handleClear}>Clear Cart</button>
                        </div>
                        <ItemList list={cartItem} />
                    </>
                     
                )
                
            }
           
           
        </div>
    )
}

export default Cart