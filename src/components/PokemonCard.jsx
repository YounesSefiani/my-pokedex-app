import React from 'react';

const PokemonCard = ({ name, image, type}) => {
    return (
        <figure className="pokemon-card">
            {image ? (
            <img src={image} alt={name}/>
            ) : (
                <p>???</p>
            )}
            <figcaption>
                <h3>{name}</h3>
                <p>Type : {type || 'Inconnu'}</p>
            </figcaption>
        </figure>
    );
};

export default PokemonCard;