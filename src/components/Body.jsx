import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
//not using keys is not acceptable <<<<<<< use index if unique is not present <<<<<<< unique id is highly recommended

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
