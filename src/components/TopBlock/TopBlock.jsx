import React, { Component } from 'react';
import { BookMark } from '../BookMark';

class TopBlock extends Component {
  render() {
    return (
      <div id='topBlock'>
        <BookMark to="/" name="My Tesk" />
        <BookMark to="/inProgress" name="In Progress" />
        <BookMark to="/completed" name="Compeleted" />
      </div>
    );
  }
}

export { TopBlock };