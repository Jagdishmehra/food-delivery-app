
import {LOGO_URL} from "../utilities/constants";

const Header=()=>{return(
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="list-item">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
};

export default Header;