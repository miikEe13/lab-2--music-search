import React, { Component } from "react";

import "./Header.css";
import Logo from "../Logo";
import { PLAYLIST_ID } from "../../constants";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <Link className="mr-2" to="/">
            <Logo />
          </Link>
          <Link to={`/playlists/${PLAYLIST_ID}`}>My Playlist</Link>
        </div>
      </div>
    );
  }
}
