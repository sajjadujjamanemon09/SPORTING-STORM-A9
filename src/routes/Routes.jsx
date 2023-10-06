import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: 
            }
        ]
    }
])