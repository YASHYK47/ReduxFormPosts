import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        React simple starter
        {this.props.children}
      </div>
    );
  }
}
