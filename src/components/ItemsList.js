import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilities/constants";
import { additem } from "../utilities/cartReduxSlice";

const ItemsList=({data=[]})=>{

const dispatch=useDispatch();
    const handleItem=(item)=>{
        dispatch(additem(item));
    };

    return (
        <div>
           {data.map((d) =>
                <div key={d.card.info.id} className="flex justify-between"> 
                <div className="text-left border-b-2 m-2 p-2 w-9/12">
                <span className="">{d.card.info.name}</span>
                <span> - ₹{d.card.info.price ? d.card.info.price/100 : d.card.info.defaultPrice/100}</span>
                <p className="text-thin text-xs m-1 text-green-700">🎖️{d.card.info.ratings.aggregatedRating.rating}</p>
                <p className="font-thin text-sm">{d.card.info.description}</p>

                </div>
                <div className="w-3/12" >
                <button className="bg-white absolute  text-green-700 m-auto mt-1 p-2 px-8 rounded-lg hover:bg-slate-200"onClick={()=>handleItem(d)} >ADD</button> 
                <img src={CDN_URL + d.card.info.imageId } className=" rounded-lg m-2"></img>
               </div>
               
               </div>
                
                )}
        </div>
    )
}
export default ItemsList;