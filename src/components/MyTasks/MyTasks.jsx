import React, { Component } from 'react';
import { AddTask } from '../AddTask';
import { TodoLists } from '../TodoLists';

class MyTasks extends Component {
  render() {
    return (
      <div class="inputTasksForm">
        <AddTask />
        <TodoLists />
      </div>
    );
  }
}

export { MyTasks };