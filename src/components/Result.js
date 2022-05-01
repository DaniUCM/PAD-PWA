import React from "react";

class Result extends React.Component {
  render() {
    return (
      <a className="Result" href={this.props.json.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        <h1>{this.props.json.volumeInfo.title}</h1>
        <p>Autores: {this.props.json.volumeInfo.authors}</p>
      </a>
    );
  }
}

export default Result;