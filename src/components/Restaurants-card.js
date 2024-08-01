import { CDN_URL } from "../utilities/constants";


const Rescard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId,areaName,costForTwo}=resData?.info; //optional chain

    return(
        <div className="res-card">
            <img className="res-logo" alt="food-item"src ={CDN_URL+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{areaName}</h4>
            
        </div>
    );
};

export default Rescard;