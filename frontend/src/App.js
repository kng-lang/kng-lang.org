import logo from './logo.svg';
import kng_logo from './logo_big.png';
import './App.css';

//import Button from '@material-ui/core/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kng_logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
