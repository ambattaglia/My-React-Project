import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = !Number.isInteger(rating);

  return (
    <div className="book__ratings">
      {new Array(fullStars).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}

      {hasHalfStar && <FontAwesomeIcon icon="star-half-stroke" />}
    </div>
  );
};

export default Rating;
