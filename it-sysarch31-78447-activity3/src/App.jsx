import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import Header from './Header';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = () => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data))
      .catch(error => console.error('Error fetching Pokemon list:', error));
  };

  return (
    <div>
      <Header/>
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
};

export default App;
