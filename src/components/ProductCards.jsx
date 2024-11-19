import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredProduct = [...data].filter(
        (product) => product.category === category
      );
      if (filteredProduct.length > 0) {
        setProducts(filteredProduct);
      } else {
        setProducts(0);
      }
    } else {
      setProducts(data);
    }
  }, [data, category]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
