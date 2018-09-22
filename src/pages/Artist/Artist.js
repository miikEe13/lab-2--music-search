import React, { Component } from "react";
import { Link } from "react-router-dom";

import AlbumSumary from "../../components/AlbumSumary";

export default class Artist extends Component {
  state = {
    loading: true,
    error: null,
    artist: null
  };
  constructor() {
    super();
  }
  componentDidMount() {
    this.loadArtist();
  }
  loadArtist = () => {
    console.log("loading artis");
    this.setState({
      loading: true,
      error: null
    });

    fetch(
      `https://react-api-lab.herokuapp.com/artists/${
        this.props.match.params.artistId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          artist: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  renderList(albums) {
    const list = albums.map(album => {
      return (
        <Link key={album.id} to={`/albums/${album.id}`}>
          <AlbumSumary data={album} />
        </Link>
      );
    });
    return list;
  }

  render() {
    const { loading, artist, error } = this.state;
    return (
      <main className="container">
        {!loading &&
          artist && (
            <React.Fragment>
              <div className="row">
                <div className="col-12">
                  <div className="row undefined">
                    <div className="col-4">
                      <img src={artist.imageUrl} />
                    </div>
                    <div className="col-8">
                      <h1>{artist.name}</h1>
                      <p>{artist.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h2>Albums</h2>
                  <ul>{this.renderList(artist.albums)}</ul>
                </div>
              </div>
            </React.Fragment>
          )}
      </main>
    );
  }
}
