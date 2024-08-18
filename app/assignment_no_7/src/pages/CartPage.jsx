import React from 'react';
import CartSummary from '../components/cartsummary/CartSummary';
import './CartPage.css'


const CartPage = ({ cartItems, removeFromCart, updateQuantity, flashMessage }) => {
    return (
        <div className='cartpage_container'>
            <div style={{ width: '60%' }}>
                <h2>Your Cart</h2>

                {/* Flash Message */}
                {flashMessage && (
                    <div className='flash_message' >
                        {flashMessage}
                    </div>
                )}

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <div key={index} className='cartitems_li'>
                                <div className='cartpage_imgbox'>
                                    <img className='cartpage_img' src={item.img} alt="" />
                                </div>
                                <div className='cartpage_text'>
                                    <strong>{item.name}</strong> - ₹{' '}{item.price}
                                
                                <div>
                                    Quantity: 
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className='remove_btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            <CartSummary cartItems={cartItems} />
        </div>
    );
};

export default CartPage;
