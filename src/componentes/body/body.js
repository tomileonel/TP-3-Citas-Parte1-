
import Titulo from '../titulo/titulo';
import Subtitulo from '../subtitulo/subtitulo';
import Formulario from '../form/form';
import Citas from '../citas/citas';
import './body.css';

const Body = ({ setCitas, citas }) => {
  return (
    <div className="body">
      <Titulo />
      <div className="container" >

      <div className="one-half column" >
      <Subtitulo texto="CREAR MI CITA"/>
      <Formulario setCitas={setCitas} citas={citas} />
      </div>
      <div className="one-half column">
      <Subtitulo texto="ADMINISTRA TUS CITAS" />
      <Citas setCitas={setCitas} citas={citas} />
      </div>
      </div>

    </div>
  );
}

export default Body;
