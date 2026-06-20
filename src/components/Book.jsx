import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({ book }) => {
  return (
  <div className="book">
    <a href="#">
      <figure className="book_img--wrapper">
        <img src={book.url} alt={book.title} className="book_img" />
      </figure>
    </a>

    <div className="book_title">
      <a href="#" className="book_title--link">
        {book.title}
      </a>
    </div>

    <div className="book_ratings">
      {new Array(Math.floor(book.rating))
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
    </div>

    <div className="book_price">
      {book.salePrice ? (
        <>
          <span className="book_price--normal">
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

