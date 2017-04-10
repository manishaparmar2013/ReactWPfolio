import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var DATA= {
  name: 'eDM',
  imageURL: require('./images/eDM1.png')
}

ReactDOM.render(
  <App profileData={DATA} />,
  document.getElementById('root')
);
