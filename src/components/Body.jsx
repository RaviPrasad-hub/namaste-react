import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData.js";
import { LIVE_API } from "../utils/constants.js";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
//not using keys is not acceptable <<<<<<< use index if unique is not present <<<<<<< unique id is highly recommended

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIVE_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //conditonal rendering
  // if (listOfRestaurants?.length === 0) {
  //   // display shimmer UI
  //   // return <h1>Loading...</h1>;
  //   return <ShimmerUI />;
  // }
  return listOfRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
