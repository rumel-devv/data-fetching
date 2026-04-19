import ProductCard from "@/components/ProductCard";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:4040/products", {next: {revalidate: 20}});
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return <div className="w-9/12 mx-auto my-6">
    <h2>Available product: {products.length} </h2>
    <div className="grid grid-cols-3 gap-4">
        {products.map(product => <ProductCard  key={product.id} product={product} ></ProductCard>)}
    </div>
  </div>
};

export default ProductsPage;
