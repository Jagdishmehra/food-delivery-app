import { CDN_URL } from "../utilities/constants";


const Rescard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId,areaName,costForTwo}=resData?.info; //optional chain

    return(
        <div className="res-card w-60 h-80 m-4 p-2 hover:border border-gray-400 rounded-xl shadow-xl cursor-pointer">
            <img className="rounded-xl h-40 w-60  scroll-smooth" alt="food-item"src ={CDN_URL+ cloudinaryImageId} />
            <h3 className="text-lg font-medium tracking-tighter text-justify">{name}</h3>
            <h4 className="font-medium">🎖️{avgRating}</h4>
            <h4 className="font-thin text-justify text-sm tracking-tighter">{cuisines.join(", ")}</h4>
            {/* <h4>{costForTwo}</h4>
            <h4>{areaName}</h4> */}
        </div>
    );
};

export default Rescard;