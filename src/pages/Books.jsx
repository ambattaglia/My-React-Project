import React, { useState } from 'react';
import { books } from '../data';
import Book from '../components/Book';

const Books = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  function filterBooks(filter) {
    if (filter === 'LOW_TO_HIGH') {
      setFilteredBooks(
        [...filteredBooks].sort(
          (a, b) =>
            (a.salePrice || a.originalPrice) -
            (b.salePrice || b.originalPrice)
        )
      );
    }

    if (filter === 'HIGH_TO_LOW') {
      setFilteredBooks(
        [...filteredBooks].sort(
          (a, b) =>
            (b.salePrice || b.originalPrice) -
            (a.salePrice || a.originalPrice)
        )
      );
    }

    if (filter === 'RATING') {
      setFilteredBooks(
        [...filteredBooks].sort((a, b) => b.rating - a.rating)
      );
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>

                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(e) => filterBooks(e.target.value)}
                >
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW_TO_HIGH">Price: Low to High</option>
                  <option value="HIGH_TO_LOW">Price: High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {filteredBooks.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
