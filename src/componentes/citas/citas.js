
import Cita from '../cita/cita';
import './citas.css';

const Citas = ({ citas, setCitas }) => {
  return (
    <div className="citas">
      {citas.map((cita, index) => (
       <Cita setCitas={setCitas} citas={citas} date={cita.date} mascota={cita.mascota} dueno={cita.dueno} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} />
      ))}
    </div>
  );
}

export default Citas;
