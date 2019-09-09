import React, { Component } from 'react';
import { TodoLists } from '../TodoLists';

class InProgress extends Component {
  render() {
    return (
      <div class="InputTasksForm">
        <TodoLists page='progress' />
      </div>
    );
  }
}

export { InProgress };