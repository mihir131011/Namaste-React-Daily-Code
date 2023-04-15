import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HomePageHeader from "./components/Header/Header";
import HomePageBody from "./components/HomePage/HomePageBody";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/ContactUs/ContactUs";
import HomePageFooter from "./components/Footer/Footer";
import Error from "./components/ErrorPage/Error";
import RestaurantMenu from "./components/HomePage/RestaurantMenu";
import Profile from "./components/AboutUs/ProfileClass";
import Search from "./components/Search/Search";
const About = lazy(() => import("./components/AboutUs/AboutUs"));
const Instamart = lazy(() => import("./components/Instamart/Instamart"));

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
