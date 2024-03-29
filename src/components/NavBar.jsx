import PropTypes from 'prop-types';
const NavBar = ({ pokemonIndex, setPokemon, pokemonList }) => {
  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={() => setPokemon(pokemonIndex - 1)}>Précedent</button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => setPokemon(pokemonIndex + 1)}>Suivant</button>
      )}
    </div>
  );
};

NavBar.propTypes = {
  pokemonIndex: PropTypes.number,
  setPokemon: PropTypes.func,
  pokemonList: PropTypes.array,
};

export default NavBar;
