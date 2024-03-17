import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;

  return (
    <div className="pokemon-card">
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name[language]} />
        </div>
        <div className="card-content">
          <div className="id-name">
            <p className="id-name-text">{`[${id}] ${name[language].toUpperCase()}`}</p>
          </div>
          <div className="type-buttons">
            {type.map((t, index) => (
              <button key={index} className="type-button">{t}</button>
            ))}
          </div>
          <div className="stats">
            <div className="left-stats">
              <p><b>HP: </b>{base.HP}</p>
              <p><b>Attk:</b> {base.Attack}</p>
              <p><b>Def:</b> {base.Defense}</p>
            </div>
            <div className="right-stats">
              <p><b>Speed: </b>{base.Speed}</p>
              <p><b>Sp. Attk: </b>{base['Sp. Attack']}</p>
              <p><b>Sp. Def: </b>{base['Sp. Defense']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
