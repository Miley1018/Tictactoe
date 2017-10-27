import React, { Component } from 'react';
import Board from './board';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <Board />
        <i className='fa fa-meetup' ></i>
      </div>
    );
  }
}
