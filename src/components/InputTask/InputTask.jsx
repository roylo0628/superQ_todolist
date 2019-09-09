import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputTasksForm } from '../InputTasksForm';
import { addTodoList } from '../../actions';

class ConnectInputTask extends Component {
  constructor(props) {
    super(props);
    if (this.props.listData) {
      this.state = this.props.listData
    } else {
      this.state = {
        id: '', name: '', date: '', time: '', file: '',
        commit: '', important: '', complete: false
      }
    }
    this.changeListState = type => {
      if (this.props.changeState) {
        this.props.changeState(type)
      } else {
        console.log("change status and no 'this.props.changeState'.")
      }
    }
    this.changeState = this.changeState.bind(this);
    this.tagImportant = this.tagImportant.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.filebox = React.createRef()
  }

  changeState(e) {
    let value = e.target.value
    if (e.target.name === "file") {
      value = value.substring(value.lastIndexOf('\\') + 1)
    } else if (e.target.name === "complete") {
      value = e.target.checked
      this.changeListState('complete')
    }
    this.setState({ [e.target.name]: value })
  }

  tagImportant() {
    if (this.state.important === '') {
      this.setState({ important: 'Y' })
    } else {
      this.setState({ important: '' })
    }
    this.changeListState('important')
  }

  submitTodo() {
    if (this.state.name === '') {
      alert('You need type some Title for event!')
    } else {
      if (this.state.id === '') {
        this.props.addTodoList(this.state)
        alert('Add Event Sucessful!')
      } else {
        this.props.editTodoList(this.state)
        alert('Update Sucessful!')
      }
      this.setState({ id: '', name: '', date: '', time: '', file: '', commit: '', impotant: '', complete: false })
      this.filebox.current.value = ''
      this.props.closeAdd()
    }
  }

  render() {
    return (
      <div>
        <div class={this.state.important === 'Y' ? 'important InputTaskTitle' : 'inputTaskTitle'} >
          <input name="complete"
            type="checkbox"
            class="taskChk"
            checked={this.state.complete}
            onChange={this.changeState} />
          <input name='name'
            type="text"
            placeholder="Type something here..."
            value={this.state.name}
            onChange={this.changeState}
            class={'taskTitle ' +
              (this.state.complete ? 'complete ' : '') +
              (this.state.important === 'Y' ? 'important ' : '')} />
          <i onClick={this.tagImportant}
            class={this.state.important === 'Y' ?
              'fas fa-star fa-lg icon iconImportant' :
              'far fa-star fa-lg icon'}></i>
          <i class="fas fa-pen fa-lg icon icon_edit"></i>
        </div>
        <InputTasksForm closeAdd={this.props.closeAdd}
          stateData={this.state}
          changeState={this.changeState}
          submitTodo={this.submitTodo}
          filebox={this.filebox} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: todoList => dispatch(addTodoList(todoList))
  }
}

const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask)

export { InputTask };