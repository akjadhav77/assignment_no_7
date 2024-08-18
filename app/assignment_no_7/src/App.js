import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductList from "./components/productlist/ProductList";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [flashMessage, setFlashMessage] = useState("");

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    showFlashMessage(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== id));
    showFlashMessage(`${item.name} removed from cart!`);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const showFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => setFlashMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    // <div className="main_container">
      <Router>
        <nav>
          <Link to="/"><h4>Home</h4></Link> |{" "}
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                flashMessage={flashMessage}
              />
            }
          />
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
