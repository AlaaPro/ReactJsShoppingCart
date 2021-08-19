import React from 'react';

export default function Header(props) {
  const { cartItems } = props;

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {cartItems.length > 0 && (
            <span className="redBadge">
              <strong>{cartItems.length}</strong>
            </span>
          )}
        </a>{' '}
        <a href="#/signing">SignIn</a>
      </div>
    </header>
  );
}
