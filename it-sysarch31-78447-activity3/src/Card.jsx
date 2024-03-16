import React from 'react';

const Card = (props) => {
  const { id, 
        name, type, base, image } = props.pokemon;

  return (
    <div className="pokemon-card">
      <img src={image} alt={name[props.language]} />
      <h2>{id}</h2>
      <h3>{name[props.language]}</h3>
      <p>Type: {type.join(', ')}</p>
      <p>HP: {base.HP}</p>
      <p>Attack: {base.Attack}</p>
      <p>Defense: {base.Defense}</p>
      <p>Sp. Attack: {base.Sp_Attack}</p>
      <p>Sp. Defense: {base.Sp_Defense}</p>
      <p>Speed: {base.Speed}</p>
    </div>
  );
};

export default Card;