import { IMG_CDN_URL } from "../../constants";

export default RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
}) => {
  return (
    <div className="card">
      <img
        src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
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
