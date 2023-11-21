import { CDN_URL } from "../utils/constants.js";

function RestaurantCard(props) {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.resData.card.card.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
}

export default RestaurantCard;
