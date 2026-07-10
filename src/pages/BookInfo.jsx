import React from 'react';
import { books } from '../data';
import { Link } from 'react-router-dom';


const BookInfo = ({ books }) => {
  return (
    <div>  
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <p> &#8592; Back to all</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </div>
  );
};

export default BookInfo;