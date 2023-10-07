import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Event from "../page/Event/Event";
import PrivetRoutes from "./PrivetRoutes";
import Blog from "../page/Blog";
import About from "../page/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('/sports.json')
            },
            {
                path: '/events/:id',
                element: <PrivetRoutes><Event></Event></PrivetRoutes>,
                loader : () => fetch('/sports.json')
            },
            {
                path: '/events',
                element: <Event></Event>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router