import React, { Component } from "react";

export default class AlbumSumary extends Component {
  render() {
    const track = this.props.data;
    console.log(track);
    return (
      <li>
        <div className="row mb-4">
          <div className="col-2">
            <h4>{track.trackNumber}</h4>
          </div>
          <div className="col-10">
            <h3>{track.name}</h3>
            <p>
              <em>{track.durationInSeconds}</em>
            </p>
          </div>
        </div>
      </li>
    );
  }
}
