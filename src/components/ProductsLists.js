import React from "react";

export default function ProductsList({ products, title }) {
  return (
    <div className="products-list">
      <h2>{title}</h2>
      {products.map(({id, name, worker, price,}) => (
        <div className="product-preview" key={id}>
          <h2>{name}</h2>
          <p>Adicionado por: {worker}</p>
          <p>Preço: R$ {price}</p>
          
        </div>
      ))}
    </div>
  );
}
