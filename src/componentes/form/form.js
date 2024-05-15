import React from 'react';
import './form.css';

const Formulario = ({setCitas, citas}) => {
  const enviarForm = (e) => {
    e.preventDefault();
    const mascota = document.getElementById('mascota').value;
    const propietario = document.getElementById('propietario').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const sintomas = document.getElementById('sintomas').value;

    const cita = {
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    };

    setCitas((prevCitas) => [...prevCitas, cita]);
  };

  return (
    <form onSubmit={enviarForm} className="formulario" >
      <label>Nombre Mascota</label>
      <input id="mascota" type="text" className="u-full-width" placeholder="Nombre Mascota" />

      <label>Nombre Dueño</label>
      <input id="propietario" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input id="fecha" type="date" className="u-full-width" />

      <label>Hora</label>
      <input id="hora" type="time" className="u-full-width" />

      <label>Sintomas</label>
      <textarea id="sintomas" className="u-full-width"></textarea>

      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
  );
}

export default Formulario;
