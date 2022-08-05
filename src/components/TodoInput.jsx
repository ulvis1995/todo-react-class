import React from 'react';
import { inputTest } from "./todoItem/dateChande";

class TodoInput extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      value: '',
      valueDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    })
  }

  resultInput = () => {
    if (this.state.value !== '') {
      if (this.state.valueDate !== '') {
        let todo = {
          text: this.state.value,
          id: new Date().getTime(),
          done: false,
          dateCreate: new Date(),
          timePlane: `${inputTest(this.state.valueDate)}`
        }
        this.props.onClickAddTodo(todo);
        this.setState({...this.state, value: '', valueDate: ''});
      } else {
        alert ('Введите планируемую дату завершения дела');
      }
    }
  }

  render () {
    return (
      <div className="todo-enter" id="todo-enter">
          <div className="todo-placeholder">
              <input type="text" placeholder="Добавить новое дело" name='value'
                value={this.state.value} onChange={this.handleChange} autoFocus/>
          </div>
          <div className="todo-date">
              <input type="date"  name='valueDate'
              value={this.state.valueDate} onChange={this.handleChange}
              />
          </div>
          <div className="todo-button">
              <button 
                onClick={this.resultInput}
                id="buttonAdd">Добавить
              </button>
          </div>
      </div>
    )
  }
}

export default TodoInput;