import React from 'react';
import Card from './Card';
import Header from './Header';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
      <Card pokemonList={pokemonList.slice(0, 3)} />
      <Pokemon pokemon={pokemonList[0]} />
    </div>
  );
}

const pokemonList = [
  {
    "id": "001",
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    },
    "image": "https://it-sysarch32.web.app/assets/001.png"
  },
  {
    "id": "002",
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草",
      "french": "Herbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,"Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    },
    "image": "https://it-sysarch32.web.app/assets/002.png"
  },
  {
    "id": "003",
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花",
      "french": "Florizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    },
    "image": "https://it-sysarch32.web.app/assets/003.png"
  }
];

export default App;