import React, { Component } from 'react';
import './App.css';
import Product from './product.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <h1>CS Folio</h1>
          <Product name={this.props.profileData.name}
          imageURL={this.props.profileData.imageURL}/>
      </div>
    )
  }
}
/*
const App = ()=>(
  <div>
    <h1>CS Folio</h1>
    <product />
  </div>

) */


export default App;
