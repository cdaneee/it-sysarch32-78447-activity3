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
              <p><b>HP: </b><span style={{ color: 'rgba(0, 255, 0, 0.7)' }}>{base.HP}</span></p>
              <p><b>Attk: </b><span style={{ color: 'red' }}>{base.Attack}</span></p>
              <p><b>Def: </b><span style={{ color: 'blue' }}>{base.Defense}</span></p>
            </div>
            <div className="right-stats">
              <p><b>Speed: </b><span style={{ color: 'orange' }}>{base.Speed}</span></p>
              <p><b>Sp. Attk: </b><span style={{ color: 'red' }}>{base['Sp. Attack']}</span></p>
              <p><b>Sp. Def: </b><span style={{ color: 'violet' }}>{base['Sp. Defense']}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
