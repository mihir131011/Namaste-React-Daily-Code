import { useLocation, useNavigate, useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurant(resId);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      {!restaurantInfo ? (
        <Shimmer />
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            <button
              onClick={() => {
                setIsLiked(isLiked ? false : true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isLiked ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={isLiked ? "red" : "black"}
                className="w-6 h-6 group-hover:"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <h1>
              Restaurant name :{" "}
              {restaurantInfo?.cards?.[0]?.card.card.info.name}
            </h1>
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
