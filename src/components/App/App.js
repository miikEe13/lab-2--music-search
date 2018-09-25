import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Artist from "../../pages/Artist";
import Album from "../../pages/Album";
import PlayList from "../../pages/PlayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists/:artistId" component={Artist} />
            <Route exact path="/albums/:albumId" component={Album} />
            <Route exact path="/playlists/:playlistId" component={PlayList} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
