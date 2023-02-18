import { RestaurantData } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterRestaurants = (searchText, restaurant) => {
  return restaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

export default HomePageBody = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []); // this is the dependency array ?

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.034664&lng=72.515983&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  }

  return !allRestaurants?.length > 0 ? (
    <Shimmer className="cardList" />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() =>
            setFilteredRestaurant(filterRestaurants(searchText, allRestaurants))
          }
        >
          Search
        </button>
      </div>
      <div className="cardList">
        {filteredRestaurant.length > 0
          ? filteredRestaurant?.map((restaurant) => {
              return (
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant.data.uuid}
                />
              );
            })
          : "No restaurants found."}
      </div>
    </>
  );
};
