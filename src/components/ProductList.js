import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  state = {
    productos: [
      { id: 1, nombre: 'Notebook', precio: 800000 },
      { id: 2, nombre: 'Mouse', precio: 15000 },
      { id: 3, nombre: 'Teclado', precio: 30000 }
    ],
    carrito: []
  };

  agregarAlCarrito = (producto) => {
    this.setState({
      carrito: [...this.state.carrito, producto]
    });
  };

  render() {
    return (
      <div>
        <h2>Lista de Productos</h2>

        {this.state.productos.map(producto => (
          <ProductItem
            key={producto.id}
            producto={producto}
            agregarAlCarrito={this.agregarAlCarrito}
          />
        ))}

        <h3>Carrito ({this.state.carrito.length})</h3>
        <ul>
          {this.state.carrito.map((item, index) => (
            <li key={index}>{item.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
