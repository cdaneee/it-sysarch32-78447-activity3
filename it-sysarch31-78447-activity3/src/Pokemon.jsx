import React from 'react';

const Pokemon = ({ pokemon }) => {
  const { id, name, type, base, image } = pokemon;
  const { HP, Attack, Defense, Sp_Attack, Sp_Defense, Speed } = base;

  return (
    <div className="pokemon-card">
      <h2>{name.english}</h2>
      <img src={image} alt={name.english} />
      <p>ID: {id}</p>
      <p>Type: {type.join(', ')}</p>
      <ul>
        <li>HP: {HP}</li>
        <li>Attack: {Attack}</li>
        <li>Defense: {Defense}</li>
        <li>Sp. Attack: {Sp_Attack}</li>
        <li>Sp. Defense: {Sp_Defense}</li>
        <li>Speed: {Speed}</li>
      </ul>
    </div>
  );
};

export default Pokemon;