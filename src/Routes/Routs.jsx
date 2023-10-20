import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "./PrivateRoutes";
import BrandProducts from "../Pages/BrandProducts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('brands.json'),
        },
        {
            path:"/addProducts",
            element: <PrivetRoute><AddProducts></AddProducts></PrivetRoute>,
        },
        {
            path: "/myCart",
            element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
            path:"/brand/:id",
            element:<PrivetRoute><BrandProducts></BrandProducts></PrivetRoute>,
            loader: () => fetch('brands.json')
        }
        // {
        //     path:"/brand/:id",
        //     element:<PrivetRoute><BrandProducts></BrandProducts></PrivetRoute>,
        //     loader: () => fetch('products.json'),
        // }
      ]
    },
  ]);



  export default router;