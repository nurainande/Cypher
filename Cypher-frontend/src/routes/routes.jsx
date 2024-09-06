import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Homepage/HomePage";
import ProductsPage from "../pages/Productpage/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import CheckoutPage from "../pages/CheckoutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import OrderConfirmationPage from "../pages/OrderConfirmationPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";

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
        path: "products",
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
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "order-details",
        element: <OrderConfirmationPage />,
      },
      {
        path: "order-history",
        element: <OrderHistoryPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);


export default router