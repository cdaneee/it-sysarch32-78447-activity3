import React from 'react';

const Pokedex = ({ pokemonList }) => {
  return (
    <div className="pokedex">
      {pokemonList.map((pokemon, index) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;