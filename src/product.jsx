import React, { Component } from 'react';

class product extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src= {this.props.imageURL} />
      </div>
    )
  }
}

export default product;
