import React, { Component } from "react";

export default class AlbumSumary extends Component {
  state = {
    saving: false
  };

  saveTrack = () => {
    this.setState({
      saving: true,
      error: null
    });

    fetch("https://react-api-lab.herokuapp.com/playlists/@miikEe12", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        track: this.props.data
      })
    })
      .then(response => {
        this.setState({
          saving: false,
          track: this.props.data
        });
      })
      .catch(error => {
        this.setState({
          saving: false,
          error: error
        });
      });
  };
  render() {
    const track = this.props.data;
    console.log(track);
    return (
      <li>
        <div className="row mb-4">
          <div className="col-1">
            <h4>{track.trackNumber}</h4>
          </div>
          <div className="col-8">
            <h3>{track.name}</h3>
            <p>
              <em>{track.durationInSeconds}</em>
            </p>
          </div>
          <div className="col-3">
            <button disabled={this.state.saving} onClick={this.saveTrack}>
              + playlist
            </button>
          </div>
          {this.state.saving && (
            <p>
              <span>Saving ...</span>
            </p>
          )}
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error.message}</p>
          )}
        </div>
      </li>
    );
  }
}
