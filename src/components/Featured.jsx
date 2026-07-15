import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import { books } from "../data";

const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>

          <div className="books">
            {books
              .filter(book => book.rating === 5)
              .slice(0, 4)
              .map(book => (
                <Book key={book.id} book={book} />
              ))}
          </div>

          <Link to="/books" className="btn">
            Explore More Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
