import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RestaurantData from "./RestaurantData";

const HomePageHeader = () => (
  <div className="header">
    <img
      src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
      alt=""
      className="logo"
    />
    <div className="header-list">
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="Avatar"
        className="card-image"
      />
      <div className="container">
        <h2>
          <b>{name}</b>
        </h2>
        <p>{cuisines?.join(", ")}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

const HomePageBody = () => (
  <div className="cardList">
    {RestaurantData?.map((restaurant) => (
      <RestaurantCard {...restaurant?.data} key={restaurant.data.uuid} />
    ))}
  </div>
);

const HomePageFooter = () => <div className="footer"></div>;

const HomePage = () => (
  <React.Fragment>
    <HomePageHeader />
    <HomePageBody />
    <HomePageFooter />
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);
