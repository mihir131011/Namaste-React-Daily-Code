import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
const filterRestaurants = (searchText, restaurant) => {
  return restaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

export default HomePageBody = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnline();
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
  if (!isOnline) {
    return <h1>Offline Please check your internet</h1>;
  }
  return !allRestaurants?.length > 0 ? (
    <Shimmer className="cardList" />
  ) : (
    <>
      {/* <div className="p-5 bg-orange-50 my-5">
        <input
          type="text"
          className="h-8 mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-1 w-16 m-2 h-8 bg-blue-800 hover:bg-blue-900 text-white rounded-md"
          onClick={() =>
            setFilteredRestaurant(filterRestaurants(searchText, allRestaurants))
          }
        >
          Search
        </button> */}
      {/* </div> */}
      <div className="flex flex-wrap place-content-evenly">
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
