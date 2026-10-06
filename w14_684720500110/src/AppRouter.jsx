import { createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import NotFound from "./pages/NotFound";
import ProductItem from "./pages/ProductItem";
import ProtectedRouter from "./ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductItem />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <ProtectedRouter>
          <Cart />
        </ProtectedRouter>,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
