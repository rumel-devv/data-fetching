import React from "react";

const ProductCard = ({product}) => {
    const {id,name,price,brand,description} = product
  return (
    <div className="card  bg-black-100 card-xs shadow-sm border-2 border-gray-400 mt-3">
      <div className="card-body">
        <h2 className="card-title text-lg">{name}</h2>
        <p className="text-sm">
          {description}
        </p>
        <p className="text-black  text-lg">
          ${price}
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
