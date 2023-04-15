import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HomePageHeader from "./components/Header";
import HomePageBody from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import HomePageFooter from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Search from "./components/Search";
const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const HomePage = () => (
  <div>
    <HomePageHeader />
    <Outlet />
    <HomePageFooter />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePageBody />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div> Please Wait... </div>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

RouterProvider;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
