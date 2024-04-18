
import './form.css';

const Formulario = () => {
  return (
    <form className="formulario">
      <div>
        <label htmlFor="nombreMascota">Nombre Mascota:</label>
        <input type="text" id="nombreMascota" />
      </div>
    </form>
  );
}

export default Formulario;
