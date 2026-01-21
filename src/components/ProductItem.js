import React from 'react';

const ProductItem = ({ producto, agregarAlCarrito }) => {
  return (
    <div>
      <p>
        <strong>{producto.nombre}</strong> - ${producto.precio}
      </p>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductItem;
