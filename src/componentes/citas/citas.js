
import Cita from '../cita/cita';
import './citas.css';

const Citas = ({ citas }) => {
  return (
    <div className="citas">
      {citas.map((cita, index) => (
       <Cita mascota={cita.mascota} dueno={cita.dueno} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} />
      ))}
    </div>
  );
}

export default Citas;
