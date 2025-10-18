import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        element: <h3>auth</h3>

    },
    {
        path: '/news',
        element: <h3>news</h3>
    },
    {
        path: '/*',
        element: <h3>error404</h3>
    }
])
export default router