import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsTax = itemsPrice * 0.15;
  const shipping = itemsPrice > 2000 ? 0 : 200;
  const totalPrice = itemsPrice + itemsTax + shipping;
  console.log('itemsPrice : ');
  console.log(itemsPrice);
  return (
    <aside className="block col-1">
      <h2>Cart items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div>
          <hr></hr>
          <div className="row">
            <div className="col-1">Items Price : </div>
            <span className="col-2 text-right">{itemsPrice}</span>
          </div>
          <div className="row">
            <div className="col-1">Items Tax : </div>
            <span className="col-2 text-right">{itemsTax}</span>
          </div>
          <div className="row">
            <div className="col-1">Items Shipping : </div>
            <span className="col-2 text-right">{shipping}</span>
          </div>
          <div className="row">
            <div className="col-1">
              <strong>Total :</strong>{' '}
            </div>
            <span className="col-2 text-right">
              <strong>{totalPrice}</strong>
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
