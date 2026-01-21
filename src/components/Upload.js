import React, { Component } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

class Upload extends Component {
  subirArchivo = async (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;

    try {
      const storageRef = ref(storage, `archivos/${archivo.name}`);
      await uploadBytes(storageRef, archivo);
      alert('Archivo subido correctamente a Firebase Storage');
    } catch (error) {
      console.error(error);
      alert('Error al subir archivo');
    }
  };

  render() {
    return (
      <div className="mb-4">
        <h3>Subir archivo</h3>
        <input type="file" onChange={this.subirArchivo} />
      </div>
    );
  }
}

export default Upload;
