import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Homepage/HomePage";
import ProductsPage from "../pages/Productpage/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductsPage />,
      },
      {
        path: "product-detail",
        element: <ProductDetailPage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
]);


export default router