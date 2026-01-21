import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

class FormProducto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      precio: '',
      productosFirebase: []
    };

    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.cargarProductos();
  }

  cargarProductos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const productos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      this.setState({ productosFirebase: productos });
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      try {
        await addDoc(collection(db, 'productos'), {
          nombre: this.state.nombre,
          precio: this.state.precio
        });

        this.setState({
          nombre: '',
          precio: ''
        });

        this.validator.hideMessages();
        this.cargarProductos();

        alert('Producto guardado correctamente');
      } catch (error) {
        console.error('Error guardando producto:', error);
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <h2>Formulario de Producto</h2>

            <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={this.state.nombre}
            onChange={this.handleChange}
          />
          <div className="text-danger">
            {this.validator.message('nombre', this.state.nombre, 'required')}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="precio"
            className="form-control"
            value={this.state.precio}
            onChange={this.handleChange}
          />
          <div className="text-danger">
            {this.validator.message('precio', this.state.precio, 'required|numeric')}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>


        <hr />

        <h3>Productos guardados</h3>
        <ul>
          {this.state.productosFirebase.map(prod => (
            <li key={prod.id}>
              {prod.nombre} - ${prod.precio}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FormProducto;

