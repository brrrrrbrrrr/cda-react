import PropTypes from 'prop-types';
const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt='' /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
