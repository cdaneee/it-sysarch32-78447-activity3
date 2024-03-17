import React from 'react';

const Card = ({ pokemon }) => {
  const { id, name, type, base, image } = pokemon;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name.english} />
      </div>
      <div className="card-content">
        <p>ID: {id}</p>
        <p>Name: {name.english}</p>
        <p>Type: {type.join(', ')}</p>
        <p>HP: {base.HP}</p>
        <p>Attack: {base.Attack}</p>
        {/* Add more stats as needed */}
      </div>
    </div>
  );
};

export default Card;
