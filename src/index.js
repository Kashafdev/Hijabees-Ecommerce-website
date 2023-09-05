import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import App from "./App";
import ProductDetails from "./components/ProductDetails";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "products",
    element: <Products/>
  },
  {
    path: "aboutus",
    element: <AboutUs/>
  },
  {
    path: "contactus",
    element: <ContactUs/>
  },
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/product/:category/:id',
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
