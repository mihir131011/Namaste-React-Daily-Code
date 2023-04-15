import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constants";
const useRestaurant = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  useEffect(() => {
    try {
      getRestaurantInfo();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${resId}`);
    const json = await data.json();
    setRestaurantInfo(json.data);
  }

  return restaurantInfo;
};

export default useRestaurant;
