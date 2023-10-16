import React from 'react';

const PokemonCard = ({ name, image, type}) => {
    return (
        <figure className="pokemon-card">
            <img src={image} alt={name}/>
            <figcaption>
                <h3>{name}</h3>
                <p>Type : {type}</p>
            </figcaption>
        </figure>
    );
};

export default PokemonCard;