import React from "react";

export default function OrderCard({product, price, quantity, onAdd, onRemove}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$"+price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button"
          style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : "" }}
          onClick={quantity === 0 ? null : onRemove}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onAdd}>+</div>
      </div>
    </div>
  );
}
