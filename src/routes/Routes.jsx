import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../page/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router