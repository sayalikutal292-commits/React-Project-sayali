import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const HeaderComp = () => {
    const onlineStatus = useOnlineStatus();
    const data = useContext(userContext)
    const[btnLogin, setBtnLogin] = useState("Login")

    // Selector :  It is hook comming from react-reduc me 
    //  Suscribing to the store using selector 

    const cartItem = useSelector((store) => store.cart.items)
    
    return (
        <div className="flex justify-between shadow-lg p-3 mb-8">
            <div>
                <img className="w-40" src={LOGO_URL} alt="logo"/>
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li>Online Status: {onlineStatus? '✅' : '🔴'}</li>
                    <li className="mx-4"><Link to='/'>Home </Link></li>
                    <li className="mx-4"><Link to='/about'>About</Link></li>
                    <li className="mx-4"><Link to='/contact'>Contact</Link></li>
                    <li className="mx-4 font-semibold"><Link to='/cart'>🛒 ({cartItem.length})</Link></li>
                    <li className="mx-4"><button className="cursor-pointer" 
                        onClick={() => {
                            btnLogin === "Login" ?
                            setBtnLogin("Logout") : 
                            setBtnLogin("Login")
                        }}>{btnLogin}</button></li>
                    <li className="mx-4">👩🏻‍💼 {data.loggedinUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComp;