import React, { ImgHTMLAttributes } from "react";
import "./CharacterCard.css";

interface Character {
  name: string;
  image: string;
  description: string;
}

const CharacterCard: React.FC<Character> = ({ name, image, description }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CharacterCard;
