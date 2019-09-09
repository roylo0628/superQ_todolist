import React, { Component } from 'react';
import { InputTask } from '../InputTask';

class AddTask extends Component {
  openAdd() {
    document.getElementById('addTask').style.display = 'none'
    document.getElementById('inputTask').style.display = ''
  }
  closeAdd() {
    document.getElementById('addTask').style.display = ''
    document.getElementById('inputTask').style.display = 'none'
  }
  render() {
    return (
      <div>
        <div>
          <input id="addTask" onClick={this.openAdd} value=" + Add Task " />
        </div>
        <div id="inputTask" style={{ display: 'none' }}>
          <InputTask closeAdd={this.closeAdd} />
        </div>
      </div>
    );
  }
}

export { AddTask };