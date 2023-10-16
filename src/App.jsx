import React, {useState} from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css'

function App() {
  return (
    <div className="contents">
      <PokemonCard
        name="Bulbizarre"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        type="Plante"
      />
    </div>
  );

}

export default App
