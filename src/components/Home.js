import React, { Component } from 'react';
import header from './header';
import card from './card';

export default class home extends Component {
  render() {
    return (
      <div className="home">
      { header()}
      {card}
      </div> 
    );
  }
}