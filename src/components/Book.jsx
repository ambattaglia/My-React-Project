import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "./Rating";

const Book = ({ book }) => {
  const fullStars = Math.floor(book.rating);
  const hasHalfStar = !Number.isInteger(book.rating);

  return (
    <div className="book">
      <Link to="/books/1">
        <button className="book__img--wrapper" onClick={() => {}}>
          <figure>
            <img src={book.url} alt={book.title} className="book__img" />
          </figure>
        </button>
      </Link>


      <div className="book__title">
      
        <button className="book_title--link" onClick={() => {}}>
          {book.title}
        </button>
      </div>
<Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
     <Rating rating={book.rating} />

     
    </div>
  );
};

export default Book;
