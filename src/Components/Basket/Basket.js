import { useState } from "react";
import "./Basket.css";

export const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);

  const basketArray = [
    {
      name: "hello",
      price: 5.99
    }
  ];

  return (
    <>
      <button
        onClick={() => {
          setShowBasket(!showBasket);
        }}
        className="button"
      >
        <span className="icon is-small">
          <i className="fas fa-shopping-basket"></i>
        </span>
      </button>
      {showBasket && (
        <div className="box">
          <ul>
            {basketArray.map((item) => (
              <li>
                {item.name} - £{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
