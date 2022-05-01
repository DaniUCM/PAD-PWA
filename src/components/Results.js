import React from "react";

import Result from './Result'

class Results extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => (
          <Result key={index} json={item} />
        ))}
      </div>
    );
  }
}

export default Results;