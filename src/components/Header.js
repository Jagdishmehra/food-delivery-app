import React, { useState } from "react";
import {LOGO_URL} from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{
    const online=useOnlineStatus();
    const [btn ,setbtn]=useState(['login']);
    const cartItems =useSelector((store)=>store.cart.items)
    
    return(
    <div className="flex justify-between bg-slate-100 shadow-lg">
        <div className="logo-container">
        <img className="w-44 bg-sky-100" src={LOGO_URL} alt="logo" />
        </div>
        <div className="list-i">
            <ul className="flex p-4 m-4 font-medium">
                <li className="px-4">Online Status:{online ? '🚛':'❌'}</li>
                <li className="px-4 hover:text-slate-500">
                    <Link to="/" >Home</Link>
                </li>
                <li className="px-4 hover:text-slate-500">
                    <Link to="/about" >AboutUs</Link>
                </li>
                <li className="px-4 hover:text-slate-500">
                    <Link to="/contact">☎Contact</Link>
                </li>
                <li className="px-4 hover:text-slate-500">
                    <Link to="/cart" >🛒Cart({cartItems.length})</Link>
                </li>
                <button className="hover:text-rose-600 px-4 text-purple-600 rounded-lg" onClick={()=>{btn==="login" ? setbtn("logout"):setbtn("login")}}>
                {btn}  
                </button>
            </ul>
        </div>
    </div>
);
};

export default Header;