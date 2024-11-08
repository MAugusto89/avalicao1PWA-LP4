import { useState, useEffect } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import character from "./components/characters.json";

function App() {
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * character.length);
    setCharacterIndex(randomIndex);
  }, []);

  const currentCharacter = character[characterIndex];

  return (
    <div className="App">
      <CharacterCard
        name={currentCharacter.name}
        image={currentCharacter.image}
        description={currentCharacter.description}
      />
    </div>
  );
}

export default App;
