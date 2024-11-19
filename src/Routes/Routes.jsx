import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../components/ErrorPage";
import ProductCards from "../components/ProductCards";
import ProductError from "../components/ProductError";
import ProductDetails from "../Pages/ProductDetails";
import SignUp from "../Pages/SignUp";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    loader: () => fetch("../products.json"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/All",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/Tablet",
            element: <ProductError></ProductError>,
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default routers;
