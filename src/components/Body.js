import { useEffect, useState } from "react"
import Rescard from "./Restaurants-card";
import Shimmer from "../utilities/shimmer";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { Link } from "react-router-dom";

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
            setlistofrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setsearchtext(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    
        const onlinestatus=useOnlineStatus();
        if(onlinestatus===false)
        {
            return (<h1>Oops, looks like you are offline...</h1>)
        }
        //shimmer card     
    // we can write shimmer loading code in return also using conditional statements.
        return searchtext.length===0 ?<Shimmer/>: (
            <div className="body">
    <div className="m-4 p-2 flex  justify-end">
        {/* <button className="hover:text-rose-600 px-1 py-0 rounded-md text-purple-600" onClick={()=>{
            const filterd=listofrestaurants.filter((restaurants)=>restaurants.info.avgRating >4.0
            );
            // setlistofrestaurant is used for fetching updated values.
                setlistofrestaurants(filterd);
        }}>Top Rated Restaurants</button> */}
        <div>
            <input type="text" className="border border-solid border-black-500 rounded-lg mx-1 mt-px"  value={sea} onChange={(e)=>{
                    setSea(e.target.value)
                }
            }/>
            <button className="hover:text-rose-600 px-1 rounded-lg text-purple-600"onClick={()=>{
                const filterdrestaurants=listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(sea.toLowerCase()));
                setsearchtext(filterdrestaurants)
            }}  >
               🔍Search
            </button>
        </div>
    </div>
    <div className="res-container flex flex-wrap m-2 p-4 ">
        {    // we looped over data fetched from api using map and simultaneously passed a function to extract values.
            searchtext.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><Rescard 
                resData={restaurant}/></Link>
            ))//id should always be on parent element
        } 
    </div>
            </div>
    
           
        );
    }

    export default Body;