import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn git
        </a>
      </header>
    </div>
  );
}

export default App;
 //hooks: to make functional component as state component .
 // hooks let you use of state and other react features(life cycle methods) in functional based components without writing class.
 //types of hooks
 //1. usestate
 //2. useEffect