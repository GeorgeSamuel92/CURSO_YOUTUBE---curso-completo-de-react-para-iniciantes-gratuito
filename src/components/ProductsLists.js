import React from "react";

export default function ProductsList({ products, title }) {
  return (
    <div className="products-list">
      <h2>{title}</h2>
      {products.map((produtct) => (
        <div className="product-preview" key={produtct.id}>
          <h2>{produtct.name}</h2>
          <p>Adicionado por {produtct.worker}</p>
        </div>
      ))}
    </div>
  );
}
