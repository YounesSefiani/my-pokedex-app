import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css'

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Plante"
  },
  {
    name: "Charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "Feu"
  },
  {
    name: "Squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "Eau"
  },
  {
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "Electrique"
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const previousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const pokemon = pokemonList[pokemonIndex];

  return (
    <div className="contents">
        <PokemonCard
          name={pokemon.name}
          image={pokemon.imgSrc}
          type={pokemon.type}
        />
      <div>
        <button onClick={previousPokemon} disabled={pokemonIndex === 0}>Précédent</button>
        <button onClick={nextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>Suivant</button>
      </div>
    </div>
  );
}

export default App;
