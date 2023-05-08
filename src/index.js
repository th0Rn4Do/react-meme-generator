import './index.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Home = () => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then((r) => r.json())
      .then(setCharacter);
  }, []);

  return <App character={character} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
