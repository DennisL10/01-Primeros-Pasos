import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
const ficha_medica ={
  altura: "187cm",
  grupo: "h+",
  estado: "Bueno",
  alergias: "Ninguna"
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='componentes'>
        <TercerComponente
        ficha={ficha_medica}/>
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
