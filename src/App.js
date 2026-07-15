import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id);

    if (dupeItem) {
      setCart(
        cart.map(item =>
          +item.id === +book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  // Update quantity
  function updateCart(item, quantity) {
    setCart(
      cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Number(quantity) }
          : cartItem
      )
    );
  }

  // Remove item
  function removeItem(item) {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  }

  // Totals
  const totals = {
    subtotal: cart.reduce(
      (sum, item) =>
        sum + (item.salePrice || item.originalPrice) * item.quantity,
      0
    ),
    tax: cart.reduce(
      (sum, item) =>
        sum + (item.salePrice || item.originalPrice) * item.quantity * 0.07,
      0
    ),
    total: cart.reduce(
      (sum, item) =>
        sum + (item.salePrice || item.originalPrice) * item.quantity * 1.07,
      0
    ),
  };

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div className="App">
      <Nav numberOfItems={cart.reduce((sum, item) => sum + item.quantity, 0)} />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookInfo addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateCart={updateCart}
              removeItem={removeItem}
              totals={totals}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
