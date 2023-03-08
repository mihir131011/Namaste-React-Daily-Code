import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  useEffect(() => {
    try {
      getRestaurantInfo();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=23.034664&lng=72.515983&menuId=${id}`
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
  }

  return (
    <>
      {!restaurantInfo?.menu?.items ? (
        <Shimmer />
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            <h1>Restaurant name : {restaurantInfo?.name}</h1>
            <img
              src={`${IMG_CDN_URL}/${restaurantInfo?.cloudinaryImageId}`}
            ></img>
            <h3>{restaurantInfo?.area}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating} stars</h3>
            <h3>{restaurantInfo?.costForTwoMsg}</h3>
          </div>
          <div style={{ marginLeft: "25px", padding: "25px" }}>
            <h1>Menu</h1>
            {restaurantInfo?.menu?.items &&
              Object.values(restaurantInfo?.menu?.items).map((itemsObj) => {
                return (
                  <ul>
                    <li>{itemsObj?.name}</li>
                  </ul>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
