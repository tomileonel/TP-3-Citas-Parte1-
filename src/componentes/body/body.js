
import Titulo from '../titulo/titulo';
import Subtitulo from '../subtitulo/subtitulo';
import Formulario from '../form/form';
import Citas from '../citas/citas';
import './body.css';

const Body = ({ citas }) => {
  return (
    <div className="body">
      <Titulo />
      <div className="subtitulos">
        <Subtitulo texto="CREAR MI CITA" />
        <Subtitulo texto="ADMINISTRA TUS CITAS" />
      </div>
      <Formulario />
      <Citas citas={citas} />
    </div>
  );
}

export default Body;
