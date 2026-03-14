import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const increaseQuantity = (index) => {
    const newOrders = orders.map((order, i) => {
      if (i === index ) {
        return { ...order, quantity: order.quantity + 1 };
      }
      return order;
    });
    setOrders(newOrders);
  }

  const decreaseQuantity = (index) => {
    const newOrders = orders.map((order, i) => {
    if (i === index && order.quantity > 0) {
      return { ...order, quantity: order.quantity - 1 };
    }
    return order;
  })
    setOrders(newOrders);
  }

  const result = () => {
    let total = 0;

    orders.forEach((order) => {
      total += order.price * order.quantity;
    })
    return total;
  };

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onAdd={() => increaseQuantity(index)}
            onRemove={() => decreaseQuantity(index)}
          />  
        ))}
        
        
      </div>

      <CheckoutButton total={result()}></CheckoutButton>
    </>
  );
}
