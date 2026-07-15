import React from "react";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import Price from "../components/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../data";

const BookInfo = ({ addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="book__skeleton">
        <div className="book__skeleton--img shimmer"></div>
        <div className="book__skeleton--text shimmer"></div>
        <div className="book__skeleton--text shimmer"></div>
        <div className="book__skeleton--text shimmer"></div>
        <div className="book__skeleton--btn shimmer"></div>
      </div>
    );
  }

  return (
    <div id="books__body" className="fade-in">
      <main id="books__main">
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>

                <Rating rating={book.rating} />

                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>

                <button className="btn" onClick={() => addToCart(book)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
