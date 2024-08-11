
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider, Route, Routes } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { children } from "react";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appstore from "./src/utilities/store";
import Cart from "./src/components/Cart";

const Applayout=()=>{
    return(
   <Provider store={appstore} >
    <div>
<Header></Header>
<Outlet/>
    </div>
    </Provider>
);
};

const approuter=createBrowserRouter([
    {
        path:"/", element:<Applayout/>,
    children: [
        {
            path:"/", element:<Body/>,
        },
        {
            path:"/about", element:<About/>,
        },
        {
            path:"/contact", element:<Contact/>,
        },
        {
            path:"/cart", element:<Cart/>,
        },
        {
            path:"/restaurants/:resId", element:<RestaurantMenu/>,
        },
    ]
}, 
])

const root = ReactDOM.createRoot(document.getElementById("root"))
// routerprovider is to render pages
root.render(<RouterProvider router={approuter}/>);