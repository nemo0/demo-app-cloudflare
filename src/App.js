import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Write a useEffect function to increment and decrement
  useEffect(() => {
    console.log('useEffect');
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <p>{count}</p>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div></div>
    </div>
  );
}

export default App;
