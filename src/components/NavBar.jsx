import React from 'react';

function NavBar ({ pokemonList, onSelectPokemon }) {
    const handleSelectPokemon = (pokemon) => {
        onSelectPokemon(pokemon);

        if (pokemon.name === 'Pikachu') {
            alert("Pika Pikachu !!!");
        }
    };
    return (
        <div className="nav-bar">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleSelectPokemon(pokemon)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );

}

export default NavBar;