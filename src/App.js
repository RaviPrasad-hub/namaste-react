import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

// resData.card.card.info.name;
// resData.card.card.info.cloudinaryImageId;
// resData.card.card.info.cuisines;
// resData.card.card.info.costForTwoMessage;
// resData.card.card.info.avgRating;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
