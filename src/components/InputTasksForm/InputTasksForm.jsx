import React, { Component } from 'react';
import { InputName } from '../InputName';

class InputTasksForm extends Component {
  render() {
    return (
      <div>
        <div class="InputTask">
          <InputName className="fas fa-calendar-alt" inputName="Dead line" />
          <div class="inputForm">
            <input name="date" type="date"
              class="inputStyle inputDateTime"
              value={this.props.date}
              onChange={this.props.changeState} />
            &nbsp;&nbsp;
            <input name="time" type="time"
              class="inputStyle inputDateTime"
              value={this.props.time}
              onChange={this.props.changeState} />
          </div>
          <InputName className="fas fa-file" inputName="File" />
          <div class="inputForm">
            <input name="file" type="file"
              class="inputStyle" ref={this.props.filebox}
              onChange={this.props.changeState} /><br />
            <span class="inputStyle">{this.props.stateData.file}</span>
          </div>
          <InputName className="fas fa-comment-dots" inputName="Comment" />
          <div class="inputForm">
            <textarea name="commit" cols="55" rows="7"
              class="inputStyle"
              value={this.props.stateData.commit}
              onChange={this.props.changeState}>
            </textarea>
          </div>
        </div>
        <div>
          <button type="button" class="addButton cancelButton" onClick={this.props.closeAdd}> X Cancel </button>
          <button type="button" class="addButton saveButton" onClick={this.props.submitTodo}> + Save </button>
        </div>
      </div>
    );
  }
}

export { InputTasksForm };