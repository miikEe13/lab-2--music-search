import React, { Component } from "react";
import PlayListTrack from "../../components/PlayListTrack";
export default class PlayList extends Component {
  state = {
    loading: true,
    error: null,
    playList: null
  };
  constructor() {
    super();
  }
  componentDidMount() {
    this.loadPlayList();
  }
  loadPlayList = () => {
    console.log("loading play list");
    const URL = "https://react-api-lab.herokuapp.com/playlists/@miikEe12";
    this.setState({
      loading: true,
      error: null
    });

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          playList: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  //return <TrackListItem key={track.id} data={track} />;
  renderList(playList) {
    const list = playList.map(item => {
      return <PlayListTrack key={item.id} data={item.track} />;
    });
    return list;
  }
  render() {
    const { loading, playList, error } = this.state;
    console.log(playList);
    return (
      <main className="container">
        {!loading &&
          playList && (
            <React.Fragment>
              <div className="container-trakcs">
                <h2>Tracks:</h2>
                <div>
                  <ul>{this.renderList(playList)}</ul>
                </div>
              </div>
            </React.Fragment>
          )}
      </main>
    );
  }
}
