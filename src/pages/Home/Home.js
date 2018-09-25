import React, { Component } from "react";
import { Link } from "react-router-dom";

import Artist from "../Artist/";
import SearchForm from "../../components/SearchForm";

export default class Home extends Component {
  state = {
    loading: false,
    error: null,
    artists: []
  };

  handleSearch = query => {
    this.setState({
      loading: true,
      error: null
    });

    let user_search = query;
    const API_URL = "https://react-api-lab.herokuapp.com/search?query=";
    const SEARCH_URL = API_URL + user_search;

    fetch(SEARCH_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          artists: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  render() {
    return (
      <div>
        <SearchForm onSearch={this.handleSearch} />
        <ul>
          {this.state.artists.map(artist => (
            <Link key={artist.key} to={`/artists/${artist.id}`}>
              <div className="row mb-4">
                <div className="col-4">
                  <img className="img-fluid" src={artist.imageUrl} />
                </div>
                <div className="col-8">
                  <h1>{artist.name}</h1>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
