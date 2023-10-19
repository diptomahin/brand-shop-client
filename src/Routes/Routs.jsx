import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path:"/addProducts",
            element: <AddProducts></AddProducts>,
        },
        {
            path: "/myCart",
            element:<MyCart></MyCart>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        }
      ]
    },
  ]);



  export default router;