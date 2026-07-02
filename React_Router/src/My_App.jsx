import React from "react";

import Home from "./Componemts/Home";
import About from "./Pages/About";
import Products from "./Componemts/Products";
import Profile from "./Componemts/Profile";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

async function githubProfileLoader(){
    const res=await fetch("https://api.github.com/users/onkarkarande77");
    if(!res.ok) throw new Error("fail to fetch data")

        return res.json();

}

function Layout() {
  return (
    <>
      <div>
        <header>
          <h1>My Shop</h1>

          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/products">Products</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/profile" prefetch="intent">Profile</Link>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <p> 2025 My Shop</p>
        </footer>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },

      {
        path: "products",
        element: <Products />,
        children: [
          { path: "camera", element: <h1>Camera</h1> },
          { path: "phones", element: <h1>Phones</h1> },
          { path: "laptops", element: <h1>Laptops</h1> },
        ],
      }, 

      { path: "profile", element: <Profile />,loader:githubProfileLoader },
    ],
  },
]);

const My_App = () => {
  return <RouterProvider router={router} />;
};

export default My_App;