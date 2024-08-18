import React from 'react';
import CartSummary from '../components/cartsummary/CartSummary';
import './CartPage.css'

// const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
//             <div style={{ width: '60%' }}>
//                 <h2>Your Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p>Your cart is empty</p>
//                 ) : (
//                     <ul>
//                         {cartItems.map((item, index) => (
//                             <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
//                                 <div>
//                                     <strong>{item.name}</strong> - ₹ {item.price}
//                                 </div>
//                                 <div>
//                                     Quantity: 
//                                     <button 
//                                         onClick={() => updateQuantity(item.id, item.quantity - 1)} 
//                                         disabled={item.quantity <= 1}
//                                     >
//                                         -
//                                     </button>
//                                     <span style={{ margin: '0 10px' }}>{item.quantity}</span>
//                                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                                 </div>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//             <CartSummary cartItems={cartItems} />
//         </div>
//     );
// };

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
                            <li key={index} className='cartitems_li'>
                                <div>
                                    <strong>{item.name}</strong> - ₹{' '}{item.price}
                                </div>
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
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <CartSummary cartItems={cartItems} />
        </div>
    );
};

export default CartPage;
