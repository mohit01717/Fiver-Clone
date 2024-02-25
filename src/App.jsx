import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Gig from "./pages/gigs/Gig";
import Featured from "./components/Featured";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gig />,
        },
        {
          path: "/gig/:id",
          element: <Home />,
        },
        {
          path: "/orders",
          element: <Home />,
        },
        {
          path: "/mygigs",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Home />,
        },
        {
          path: "/messages",
          element: <Home />,
        },
        {
          path: "/messages/:id",
          element: <Home />,
        },
        {
          path:"/login",
          element:<Login name={"Login"}/>

        },
        {
          path:"/register",
          element:<Login name={"Register"}/>

        },
      ],
      Outlet,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
