import React, { useEffect, useState } from "react";

const Item = ({ item, index, handleAddToCart, resetClicked }) => {
  const [currentQuantity, setCurrentQuantity] = useState(item.quantity);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(0)
  }, [resetClicked])

  const increaseQuantity = () => {
    setCurrentQuantity((prevQuantity) => Number(prevQuantity) + 1);
  };
  const decreaseQuantity = () => {
    setCurrentQuantity((prevQuantity) =>
      prevQuantity <= 1 ? 1 : Number(prevQuantity) - 1
    );
  };

  const calculateCurrentPrice = () => {
    if (currentQuantity >= 3) {
      return item.price * 0.85 * currentQuantity;
    } else if (totalQuantity >= 2) {
      const price = item.price * 0.85;
      return price * currentQuantity;
    } else {
      return item.price * currentQuantity;
    }
  };

  // {resetClicked === false ? totalQuantity : 0}

  const currentPrice = calculateCurrentPrice();

  const addToCard = () => {
    handleAddToCart(currentPrice);
    setTotalQuantity(
      (prevTotalQuantity) => Number(prevTotalQuantity) + Number(currentQuantity)
    );
    setCurrentQuantity(1);
  };

  return (
    <>
      <li key={index}>
        <button onClick={() => addToCard()}>Add to cart</button>
        <br />
        <span>
          {item.name} - {item.price}$ for 1L without discount. You have already added {totalQuantity}L
        </span>
        <br />
        <span>{Number(currentPrice).toFixed(2)}$</span>
        <br />
        <span>{currentQuantity <= 1 ? 1 : currentQuantity}</span>
        <input
          type="text"
          value={currentQuantity}
          onChange={(e) => setCurrentQuantity(e.target.value)}
        />
        <br />
        <button onClick={increaseQuantity}>Increase Quantity</button>
        <button onClick={decreaseQuantity}>Decrease Quantity</button>
        <br />
      </li>
      <br />
    </>
  );
};

export default Item;
