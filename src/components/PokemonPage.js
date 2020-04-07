import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonAPI = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filter: '',
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemon: []
  //   }
  // }

  filterPokemons = () => {
    // console.log(pokemonName)
    return this.state.pokemons.filter( pokemon => pokemon.name.includes(this.state.filter) ) 
  }

  setFilter = (filter) => {
    this.setState({filter})
  }




  fetchPokemon = () => {
    fetch(pokemonAPI)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons }))
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.setFilter} />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} />
      </Container>
    )
  }
}

export default PokemonPage
