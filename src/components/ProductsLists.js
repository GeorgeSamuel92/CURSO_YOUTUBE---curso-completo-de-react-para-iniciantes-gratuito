import React from "react";

export default function ProductsList({ products, title, handleDelete }) {
  return (
    <div className="products-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.name}</h2>
          <p>Adicionado por {product.worker}</p>
          <button onClick={() => handleDelete(product.id)}  style={{ color: '#000' }}>Apagar</button>
        </div>
      ))}
    </div>
  );
}