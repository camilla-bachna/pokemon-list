import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const pokemonType = props.pokemonEach.types.map((pokemonType, index) => {
    return (
      <li key={index} className="list__types--type">
        {pokemonType}
      </li>
    );
  });
  return (
    <>
      <img
        src={props.pokemonEach.url}
        alt={'Image of ' + props.pokemonEach.name}
        className="list__img"
      />
      <h2 className="list__title">{props.pokemonEach.name}</h2>
      <ul className="list__types">{pokemonType}</ul>
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  pokemonType: PropTypes.string,
};

export default Pokemon;
