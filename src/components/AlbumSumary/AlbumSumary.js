import React, { Component } from "react";

export default class AlbumSumary extends Component {
  render() {
    return (
      <div>
        <div className="row mb-4">
          <div className="col-3">
            <img src={this.props.data.imageUrl} />
          </div>
          <div className="col-9">
            <h2>{this.props.data.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}
