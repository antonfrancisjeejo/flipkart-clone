import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const product = [1, 2, 3, 4, 5];
  return (
    <div className=" mt-24">
      {product.map(() => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductList;
