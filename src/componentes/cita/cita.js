
import './cita.css';

const Cita = ({ mascota, dueno, fecha, hora, sintomas }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>dueño:<span>{dueno}</span> </p>
      <p>Fecha:<span>{fecha}</span> </p>
      <p>Hora:<span>{hora}</span> </p>
      <p>Sintomas:<span>{sintomas}</span> </p>
      <button class="button elimnar u-full-width">Eliminar ×</button>    
      </div>
  );
}

export default Cita;
