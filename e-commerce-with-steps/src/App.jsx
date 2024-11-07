import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Brands from "./Components/Brands/Brands";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/Notfound";

let rout = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products", element: <Products /> },
      { path: "brands", element: <Brands /> },
      { path: "categories", element: <Categories /> },
      { path: "footer", element: <Footer /> },
      { path: "layout", element: <Layout /> },
      { path: "navbar", element: <Navbar /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: " * ", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={rout}></RouterProvider>;
}
export default App;
