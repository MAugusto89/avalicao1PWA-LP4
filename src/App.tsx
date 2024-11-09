import React, { useEffect, useState } from 'react';
import './App.css';
import { characters } from './components/characters';

const App: React.FC = () => {
  const [character, setCharacter] = useState(characters[0]);

  useEffect(() => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setCharacter(randomCharacter);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={character.image} alt={character.name} className="character-image" />
        <h1>{character.name}</h1>
        <p>{character.description}</p>
      </header>
    </div>
  );
};

export default App;
