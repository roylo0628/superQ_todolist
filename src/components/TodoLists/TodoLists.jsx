import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../List';

class ConnectTodoLists extends Component {
  render() {
    this.props.data
      .sort((f, s) => f.complete < s.complete ? 1 : -1)
      .sort((f, s) => f.important < s.important ? 1 : -1)
    let todoCount = 0
    let Lists = this.props.data.map((item) => {
      switch (this.props.page) {
        case 'progress': {
          if (item.complete)
            return null
          break;
        }
        case 'completed': {
          if (!item.complete)
            return null
          break;
        }
      }
      if (!item.complete) todoCount++
      return <List key={item.id} listData={item} />
    })
    return (
      <div>
        <div>
          {Lists}
        </div>
        <div class="countText">
          <span>
            {todoCount === 0 ? 'Great Job' : todoCount === 1 ? 'Almost Completed' : (todoCount + ' tasks left')}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state }
}

const TodoLists = connect(mapStateToProps)(ConnectTodoLists)

export { TodoLists };