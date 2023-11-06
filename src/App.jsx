import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";


const pokemonData = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Plante",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "Feu",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "Eau",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "Electrique",
  },
  {
    name: "mew",
  },
];

function App() {
  useEffect(() => {
    alert('Hello Pokémon Trainer ! :)');
  }, []);
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonData[0]);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="contents">
      <PokemonCard
        name={selectedPokemon.name}
        image={selectedPokemon.imgSrc}
        type={selectedPokemon.type}
      />
      <NavBar pokemonList={pokemonData} onSelectPokemon={handleSelectPokemon} />
    </div>
  );
}

export default App;
