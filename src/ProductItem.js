import React, { useEffect, useState } from "react";
import Product from "./Product";
import Item from "./Item";
import extras from './Extras';

const ProductItem = () => {

  const [total, setTotal] = useState(0);
  const [resetClicked, setresetClicked] = useState(false)
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (price) => {
    setTotal(total + price);
  };

  const handleReset = () => {
    setTotal(0);
    setresetClicked(!resetClicked);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3031/prices');
      const data = await response.json();
      setPrices(data);
    } catch (error) {
      console.log('Ошибка при выполнении запроса:', error);
    }
  };
  console.log(prices);

  const extraItems = Object.entries(prices).map(([name, price]) => {
    return (
      <div key={name}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h2>Buy 3Liters+ and use 15% Off</h2>
        {Product.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              index={index}
              handleAddToCart={handleAddToCart}
              resetClicked={resetClicked}
            />
          );
        })}
        <br />
        <span>Total cost is: {Number(total).toFixed(2)}</span>
        <button onClick={handleReset}>Reset</button>
        {extraItems}
        <span>{extras.snacksQuantity}</span>
        <button onClick={() => {extras.increaseQuantity()}}>Increase value</button>
      </ul>
    </div>
  );
};

export default ProductItem;
