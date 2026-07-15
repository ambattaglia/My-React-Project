import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Explore <span className="purple">More</span>
          </h2>

          <p className="explore__description">
            Discover more books, categories, and recommendations.
          </p>

          <Link to="/books" className="btn">
            Browse Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
