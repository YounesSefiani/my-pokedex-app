import React from 'react';

const PokemonCard = (props) => {
    console.log(props);
    return (
        <figure className="pokemon-card">
            {props.image ? (
            <img src={props.image} alt={props.name}/>
            ) : (
                <p>???</p>
            )}
            <figcaption>
                <h3>{props.name}</h3>
                <p>Type : {props.type || 'Inconnu'}</p>
            </figcaption>
        </figure>
    );
};

export default PokemonCard;