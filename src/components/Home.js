import React, { Component } from 'react';

import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div classname="home">
      { Header()}
      </div> 
    );
  }
}