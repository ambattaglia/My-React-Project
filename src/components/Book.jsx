import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const fullStars = Math.floor(book.rating);
  const hasHalfStar = !Number.isInteger(book.rating);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </Link>

      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book_title--link">
          {book.title}
        </Link>
      </div>

      <div className="book__ratings">
        {new Array(fullStars).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon="star-half-stroke" />}
      </div>

      <div className="book_price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;
