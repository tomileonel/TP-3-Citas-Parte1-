import './App.css';
import titulo from './componentes/titulo/titulo';

titulo = {
  texto: 'Este es un texto por default porque no me llegó nada en la prop texto',
  clase: 'verde',
}

function App() {
  return (
    <titulo texto={titulo.texto} clase={titulo.clase} />
  );
}

export default App;
