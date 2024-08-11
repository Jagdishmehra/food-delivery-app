import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearcart } from "../utilities/cartReduxSlice";

const Cart=()=>{
       const dispatch=useDispatch();
    const handleclearCart=()=>{
                dispatch(clearcart());
    }
    const cartItems=useSelector((store)=>store.cart.items);
    return (

<div className="text-center m-4 p-4">
    <h1 className="font-bold text-2xl">Cart</h1>
    <p className="font-thin text-sm m-1">Total items({cartItems.length})</p>
    <div className="w-6/12 m-auto">
    {cartItems.length===0 && <h1 className="text-xl font-thin m-20"> 😞Your card seems empty please add some items....</h1>}
    <ItemsList data={cartItems} />
    </div>
    <button onClick={handleclearCart}>Clear Cart</button>
    </div>
)
};
export default Cart;