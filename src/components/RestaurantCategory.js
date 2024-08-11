import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory=({resdata})=>{
    //  console.log(resdata);
    const [show,setShow]=useState(false);
    const accorDian=()=>{
setShow(!show);
    }
    return (
    <div>
        <div className="w-6/12 shadow-gray shadow-2xl bg-slate-50 m-auto my-4 p-4  ">
           <div className="flex justify-between cursor-pointer" onClick={accorDian}> <span className="font-semibold">{resdata.title} ({resdata.title.length})</span>
            <span className="font-extrabold">˅</span></div>
            {show && <ItemsList data={resdata.itemCards}/>}
        </div>
    </div>
    )
}
export default RestaurantCategory;