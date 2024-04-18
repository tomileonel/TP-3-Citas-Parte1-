
import './cita.css';

const Cita = ({ mascota, dueno, fecha, hora, sintomas }) => {
  return (
    <div className="cita">
      <p><strong>Nombre Mascota:</strong> {mascota}</p>
      <button className="btn-eliminar">Eliminar</button>
    </div>
  );
}

export default Cita;
