import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore More <span className="purple">Books</span>
          </h2>

          <p className="explore__description">
            Discover more books, categories, and recommendations.
          </p>

          <Link to="/books">
            <button className="btn">Browse Books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
