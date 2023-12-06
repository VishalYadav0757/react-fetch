import React, { useState, useEffect } from "react";
import ProductCard from "../../atoms/product-card";
import "./index.css";

const FetchComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response?.ok) {
        throw new Error("Something went wrong  :(");
      }

      const fetchedData = await response?.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>Products data fetched using 'fetch' function</h1>
      <div className="product-list">
        {data?.map((item, index) => (
          <div key={index} className="product-card">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchComponent;
