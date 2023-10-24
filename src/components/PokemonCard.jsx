import React from 'react';
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        image: PropTypes.string,
    })
};

export default PokemonCard;