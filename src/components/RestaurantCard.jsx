import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export default RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
}) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      className="w-52 p-2 m-2 shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-105 hover duration-300"
    >
      <div>
        <img
          src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
          alt="Avatar"
          className="card-image"
        />
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-xs mt-2">{cuisines?.join(", ")}</p>
          <p className="text-xs mt-2">{deliveryTime} mins</p>
        </div>
      </div>
    </Link>
  );
};
