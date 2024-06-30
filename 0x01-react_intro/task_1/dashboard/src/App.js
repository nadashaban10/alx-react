import React from 'react'; // Ensure React is imported when using JSX
import logo from './175b85183ecedb529e14.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications'; 

function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
      <p>Login to access the full dashboard</p>
        <div className='forms' >
      <form>
          <label htmlFor="email"> Email </label>
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="password"> Password </label>
          <input type="password" id="password" placeholder="Password" />
          <button>Ok</button>
        </form>
        </div>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;