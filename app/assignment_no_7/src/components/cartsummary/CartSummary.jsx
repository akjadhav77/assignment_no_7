import React, { useState } from "react";
import './CartSummary.css'

const CartSummary = ({ cartItems }) => {
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const fixedDiscount = subtotal > 1000 ? 100 : 0; // Example: ₹ 100 discount for orders above ₹ 1000
  const additionalDiscount =
    (discountPercentage / 100) * (subtotal - fixedDiscount);
  const total = subtotal - fixedDiscount - additionalDiscount;

  return (
    <div className="cart_summary_container" >
      <h2>Cart Summary</h2>
      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      {fixedDiscount > 0 && (
        <p>Fixed Discount: -₹ {fixedDiscount.toFixed(2)}</p>
      )}
      <p>
        Enter Discount (%):
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </p>
      {additionalDiscount > 0 && (
        <p>Additional Discount: -₹ {additionalDiscount.toFixed(2)}</p>
      )}
      <h3>Total: ₹ {total.toFixed(2)}</h3>
      <button className="checko_btn" onClick={() => alert("Proceed to Checkout")}>Checkout</button>
    </div>
  );
};

export default CartSummary;
