import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { TopBlock } from '../TopBlock';
import { MyTasks } from '../MyTasks';
import { todoListStore } from '../../store';
import { InProgress } from '../InProgress';
import { Completed } from '../Completed';

class Main extends Component {
  render() {
    return (
      <Provider store={todoListStore}>
        <HashRouter>
          <div class="alignCenter">
            <TopBlock />
            <Route exact path="/" component={MyTasks} />
            <Route exact path="/inProgress" component={InProgress} />
            <Route exact path="/completed" component={Completed} />
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

//增加幾個測試用的全域函數
window.store = todoListStore

export { Main };