import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(product => (
        <div className="cart-item" key={product.id}>
          <p>{product.name} - ${product.price.toFixed(2)}</p>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
