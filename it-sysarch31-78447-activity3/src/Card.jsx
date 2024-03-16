import React from 'react';
import './App.css';

const Card = (props) => {
  const { id, 
        name, type, base, image } = props.pokemon;

  return (
    <div>
    {list.map(pokemon => (
      <div key={pokemon.id}>
        <h2>{pokemon.name.english}</h2>
        <p>Type: {pokemon.type.join(', ')}</p>
        <img src={pokemon.image} alt={pokemon.name.english} />
      </div>
    ))}
  </div>
  );
};

export default Card;