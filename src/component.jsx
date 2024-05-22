import React from 'react';
import Product from './product.jsx';

function Shopping({ title, products }) {
  return (
    <div className="shopping">
      <h1>{title}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Product name={product.name} quantity={product.quantity} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;
