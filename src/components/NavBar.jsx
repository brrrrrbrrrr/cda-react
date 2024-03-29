import PropTypes from 'prop-types';
const NavBar = ({ setPokemon, pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return (
          <button onClick={() => setPokemon(index)} key={index}>
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
};

NavBar.propTypes = {
  pokemonIndex: PropTypes.number,
  setPokemon: PropTypes.func,
  pokemonList: PropTypes.array,
};

export default NavBar;
