import React from 'react';

function NavBar ({ pokemonList, onSelectPokemon }) {
    return (
        <div className="nav-bar">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => onSelectPokemon(pokemon)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;