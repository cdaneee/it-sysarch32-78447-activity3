import React, { useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const filterByLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="pokedex">
      <div className="buttons">
        <button className="button1" onClick={() => filterByLanguage('english')}>English</button>
        <button className="button2" onClick={() => filterByLanguage('japanese')}>Japanese</button>
        <button className="button3" onClick={() => filterByLanguage('chinese')}>Chinese</button>
        <button className="button4" onClick={() => filterByLanguage('french')}>French</button>
      </div>
      <div className="pokemon-list">
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
