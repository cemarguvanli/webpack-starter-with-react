import React, { Component } from 'react'
import config from './config.json';
import './main.scss';

import logoSvg from './react.svg';
import logoPng from './react.png';

export default class Greeter extends Component {
  render() {
    return (
      <div className="root">
        <img src={logoSvg} alt="" />
        <img src={logoPng} alt="" />
        <h1>{config.greetTitle}</h1>
        <p>{config.greetText}</p>
      </div>
    );
  }
};
