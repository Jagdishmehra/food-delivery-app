import { useEffect, useState } from "react"
import Rescard from "./Restaurants-card";
import Shimmer from "../utilities/shimmer";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body=()=>{

    const [listofrestaurants, setlistofrestaurants]= useState([]); 
    const [searchtext, setsearchtext]=useState([]);
    //usestate takes two arguments as array for better data sync and updation.
    const [sea,setSea]=useState("")
    //to give value and update vaule after search.
    useEffect(()=> {
        fetchdata()
    },[])
    
    
        const fetchdata=async ()=>{
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
    
            //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);  for console check of res-data.
            const json= await data.json();
            setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setsearchtext(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    
        const onlinestatus=useOnlineStatus();
        if(onlinestatus===false)
        {
            return (<h1>Oops, looks like you are offline...</h1>)
        }
        //shimmer card
    
        if(listofrestaurants.length===0){
            return <Shimmer/>
        };

        
        
    // we can write shimmer loading code in return also using conditional statements.
        return (
            <div className="body">
    <div className="top-btn">
        <button onClick={()=>{
            const filterd=listofrestaurants.filter((res)=>res.info.avgRating >4.0
            );
            // setlistofrestaurant is used for fetching updated values.
                setlistofrestaurants(filterd);
        }}>Top Rated Restaurants</button>
        <div>
            <input type="text" className="search-btn"  value={sea} onChange={(e)=>{
                    setSea(e.target.value)
                }
            }/>
            <button onClick={()=>{
                const filterdrestaurants=listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(sea.toLowerCase()));
                setsearchtext(filterdrestaurants)
            }}  >
               search
            </button>
        </div>
    </div>
    <div className="res-container">
        {    // we looped over data fetched from api using map and simultaneously passed a function to extract values.
            searchtext.map((restaurant)=>(<Rescard key={restaurant.info.id} 
                resData={restaurant}/>
            ))
        } 
    </div>
            </div>
    
           
        );
    }

    export default Body;