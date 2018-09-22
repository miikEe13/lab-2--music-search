import React, { Component } from "react";
import { Link } from "react-router-dom";

import AlbumSumary from "../../components/AlbumSumary";
import TrackListItem from "../../components/TrackListItem";

export default class Album extends Component {
  state = {
    loading: true,
    error: null,
    album: null
  };
  constructor() {
    super();
  }
  componentDidMount() {
    this.loadAlbum();
  }
  loadAlbum = () => {
    console.log("loading album");
    const URL = "https://react-api-lab.herokuapp.com/albums/";
    this.setState({
      loading: true,
      error: null
    });

    fetch(URL + this.props.match.params.albumId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          album: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  renderList(tracks) {
    const list = tracks.map(track => {
      return <TrackListItem key={track.id} data={track} />;
    });
    return list;
  }
  render() {
    const { loading, album, error } = this.state;
    console.log(album);
    return (
      <main className="container">
        {!loading &&
          album && (
            <React.Fragment>
              <div className="row">
                <AlbumSumary data={album} />
              </div>
              <div className="container-trakcs">
                <h2>Tracks:</h2>
                <div>
                  <ol className="list-unstyled">
                    {this.renderList(album.tracks)}
                  </ol>
                </div>
              </div>
            </React.Fragment>
          )}
      </main>
    );
  }
}
