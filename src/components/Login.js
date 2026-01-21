import React, { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

class Login extends Component {
  state = {
    email: '',
    password: '',
    mensaje: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      );
      this.setState({ mensaje: 'Usuario autenticado' });
    } catch (error) {
      this.setState({ mensaje: 'Error de autenticación' });
    }
  };

  render() {
    return (
      <div className="mb-4">
        <h3>Login</h3>

        <form onSubmit={this.login}>
          <input
            className="form-control mb-2"
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <input
            className="form-control mb-2"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={this.handleChange}
          />

          <button className="btn btn-success">Ingresar</button>
        </form>

        <p>{this.state.mensaje}</p>
      </div>
    );
  }
}

export default Login;
