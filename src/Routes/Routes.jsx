import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LogInAuth from "../Pages/LogInAuth";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/NewsDetails";

const router= createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'/category/:id',
                loader: ()=>fetch('/news.json'),
                Component: CategoryNews
            }
        ]
   
    },
    {
        path: '/auth',
        Component: AuthLayout ,
        children: [
            {
                path:'/auth/logIn',
                Component:LogInAuth

            },
            {
                path:'/auth/register',
                Component: Register
            }
          
           
        ]


    },
   {
                path:'/news-details/:id',
                Component: NewsDetails ,
                loader: ()=>fetch('/news.json')
            },
    {
        path: '/*',
        element: <h3>error404</h3>
    }
])
export default router