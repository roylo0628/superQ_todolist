import React, { Component } from 'react';
import { TodoLists } from '../TodoLists';

class Completed extends Component {
  render() {
    return (
      <div class="InputTasksForm">
        <TodoLists page='completed' />
      </div>
    );
  }
}

export { Completed };