import logo from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welocme to <b>The AI Kids Lab</b>
        </p>
        <a
          className="App-link"
          href="http://theaikidslab.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Embrace the technology, enlighten the future!
        </a>
      </header>
    </div>
  );
}

export default App;
