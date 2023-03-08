import { IMG_CDN_URL } from "../../constants";
import { Link } from "react-router-dom";
export default RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
}) => {
  return (
    <div className="card" style={{ color: "black" }}>
      <Link
        to={`/restaurant/${id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <img
          src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
          alt="Avatar"
          className="card-image"
        />
        <div className="container" style={{ color: "black" }}>
          <h2>
            <b>{name}</b>
          </h2>
          <p>{cuisines?.join(", ")}</p>
          <p>{deliveryTime} mins</p>
        </div>
      </Link>
    </div>
  );
};
