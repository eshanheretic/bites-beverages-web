import React from "react";

import "./RestaurantInfo.scss";
import Ratings from "./Ratings/Ratings";

const RestaurantInfo = () => {
  return (
    <div className="restaurant-info-main">
      <img src={require("../../assets/images/home-panel-11-1-1.jpg")} alt="" />
      <div className="flex-row restaurant-info-body justify-space-between">
        <div>
          <div className="restaurant-heading mb-1">Quick Bites</div>
          <div className="restaurant-desc mb-1">
            Punjabi, North Indian, South Indian, Mexican, Shakes and more
          </div>
          <div className="restaurant-address">
            <span className="fa fa-map-marker pr-1"></span>
            <span>Mulund - West, Mumbai - 400080</span>
          </div>
        </div>
        <React.Fragment>
          <Ratings />
        </React.Fragment>
      </div>
    </div>
  );
};

export default RestaurantInfo;
