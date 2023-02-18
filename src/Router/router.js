import { createBrowserRouter } from "react-router-dom";
import Signin from "../Common/SignIn/Signin";
import SignUp from "../Common/SignUp/SignUp";
import LayOut from "../LayOut/LayOut";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
         {
            path:"/",
            element:<Home/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<About/>
         },
         {
            path:"/FindJob",
            element:<About/>
         },
         {
            path:"/PostJob",
            element:<About/>
         },
         {
            path:"/signUp",
            element:<SignUp/>
         },
         {
            path:"/signIn",
            element:<Signin/>
         }
        ]
    }
])