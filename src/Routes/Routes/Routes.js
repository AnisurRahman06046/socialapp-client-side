import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About/About";
import Home from "../../Pages/Home/Home/Home";
import Media from "../../Pages/Media/Media/Media";

export const router  = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/media',element:<Media></Media>},
        {path:'/about',element:<About></About>},
    ]}
])