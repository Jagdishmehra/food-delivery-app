import { useEffect, useState } from "react";
import Shimmer from "../utilities/shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

    const { resId }=useParams();

const [menudata, setmenudata]=useState(null);

useEffect(()=>{
    fetchMenu();
},[]);
//fetch menu is the which will pass the api data to use effect using async await.
const fetchMenu= async()=>{
const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=".concat(resId));


//converting data to json
const json=await data.json();
setmenudata(json.data);
};
if(menudata===null){
    return <Shimmer/>
}

//const {itemCards} = menudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


//console.log(menudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const categories=menudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

const { name,cuisines,costForTwo }= menudata?.cards[2]?.card?.card?.info ||{};

    return( 
        <div className="my-4 text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="font-semibold">Serves- {cuisines.join(", ")}</h1>
            {/* <h1>₹{costForTwo/100}</h1> */}
                {/* we have to build accordian for each category */}
                {
                    categories.map((category)=>( 
                        <RestaurantCategory key={category.card.card.itemCards.title}resdata={category?.card?.card}/>)
                    )
                }
                
        </div>
    )

}

export default RestaurantMenu;

