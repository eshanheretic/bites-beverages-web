import React from "react";

import "./Ratings.scss";

const Ratings = () => {
  return (
    <div className="ratings-main flex-col mt-1">
      <div className="flex-col rating-child rating-value">4.8</div>
      <div className="flex-row rating-child rating-stars">
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-half"></span>
      </div>
    </div>
  );
};

export default Ratings;
