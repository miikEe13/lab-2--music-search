import React, { Component } from "react";

export default class SearchForm extends Component {
  searchInput = React.createRef();
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.searchInput.current.value);
  };
  render() {
    return (
      <div>
        <form className="SearchBar mb-4" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                className="SearchBar__input"
                type="text"
                placeholder="Artist name"
                ref={this.searchInput}
              />
            </div>
            <div className="col-2">
              <button className="SearchBar__submit-button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
