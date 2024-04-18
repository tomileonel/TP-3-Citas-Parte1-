import './App.css';
import titulo from './componentes/titulo/titulo';
import Body from './componentes/body/body';

function App() {
  const citasEjemplo = [
    {
      mascota: 'Luna',
      dueno: 'Juan',
      fecha: '2024-04-17',
      hora: '10:00',
      sintomas: 'Dolor de estómago'
    },
    {
      mascota: 'Max',
      dueno: 'María',
      fecha: '2024-04-18',
      hora: '15:30',
      sintomas: 'Fiebre y tos'
    },
    {
      mascota: 'Mario',
      dueno: 'Bros',
      fecha: '2024-04-18',
      hora: '15:30',
      sintomas: 'Extraña a luigy'
    }
  ];

  return (
    <div className="App">
      <Body citas={citasEjemplo} />
    </div>
  );
}



export default App;
