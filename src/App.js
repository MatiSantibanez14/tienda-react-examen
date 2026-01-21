import React from 'react';
import ProductList from './components/ProductList';
import FormProducto from './components/FormProducto';
import Login from './components/Login';
import Upload from './components/Upload';

function App() {
  return (
    <div className="container mt-4">

      <Login />
      <Upload />

      <h1 className="text-center mb-4">Tienda React</h1>

      <div className="row">
        <div className="col-md-6">
          <ProductList />
        </div>

        <div className="col-md-6">
          <FormProducto />
        </div>
      </div>
    </div>
  );
}

export default App;

