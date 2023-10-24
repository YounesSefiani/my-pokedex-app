import React from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Plante"
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[0];
  return (
    <div className="contents">
        <PokemonCard
          name={pokemon.name}
          image={pokemon.imgSrc}
          type={pokemon.type}
        />
    </div>
  );

}

export default App
