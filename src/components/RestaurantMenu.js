import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";

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
      "https://www.swiggy.com/dapi/menu/v4/full?lat=23.034664&lng=72.515983&menuId=433728"
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
  }

  return (
    <div>
      <div>
        <h1>Restaurant id : {id}</h1>
        <h1>Restaurant name : {restaurantInfo?.name}</h1>
        <img src={`${IMG_CDN_URL}/${restaurantInfo?.cloudinaryImageId}`}></img>
        <h3>{restaurantInfo?.area}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} stars</h3>
        <h3>{restaurantInfo?.costForTwoMsg}</h3>
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
