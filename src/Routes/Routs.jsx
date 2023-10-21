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
import ProductDetails from "../Pages/ProductDetails";
import UpdateProducts from "../Pages/UpdateProducts";


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
            loader: () => fetch('brands.json'),
        },
        {
            path:"/products/:id",
            element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
            loader: ({params}) => fetch(`https://brandshop-server-r7ko1my4a-mahin-ahmeds-projects.vercel.app/products/${params.id}`)
        },
        {
            path:"/Update/:id",
            element:<PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
            loader: ({params}) => fetch(`https://brandshop-server-r7ko1my4a-mahin-ahmeds-projects.vercel.app/products/${params.id}`)
        },
      ]
    },
  ]);



  export default router;