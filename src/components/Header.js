import React, { useState } from "react";
import {LOGO_URL} from "../utilities/constants";
import { Link } from "react-router-dom";


const Header=()=>{
    
    const [btn ,setbtn]=useState(['login']);
    return(
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        </div>

        <div className="list-item">
            <ul>
                <li>
                    <Link to="/" className="route">Home</Link>
                </li>
                <li>
                    <Link to="/about"className="route" >AboutUs</Link>
                </li>
                <li>
                    <Link to="/contact"className="route">Contact</Link>
                </li>
                <li>
                    <Link to=""className="route" >Cart</Link>
                </li>
                <button className="login-btn" onClick={()=>{btn==="login" ? setbtn("logout"):setbtn("login")}}>
                {btn}  
                </button>
            </ul>
        </div>
    </div>
);
};
// added a toogle function at line 19 to sync button.
export default Header;