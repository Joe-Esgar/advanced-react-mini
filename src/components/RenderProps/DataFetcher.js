import React, { Component } from "react";
import axios from "axios";

class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null
    };
  }

  fetchData = () => {
    axios.get(this.props.url).then(res => {
      this.setState({
        pokemon: res.data.cards
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.pokemon
          ? this.props.renderPokemon(this.state.pokemon)
          : this.fetchData()}
      </div>
    );
  }
}

export default DataFetcher;
