import React from 'react';
import { getLocalDate, getTimeCreate } from "./dateChande";

class Todos extends React.Component {
    constructor (props) {
      super (props);
      this.state = {
        value: this.props.text,
        valueDate: this.props.timePlane
      }
    }

    deleteTodo = (id) => {
      this.props.onClickDeleteTodo(id);
      localStorage.setItem('todo', JSON.stringify(this.props.todos))      
    };

    completeTodo = (id) => {
      this.props.onClickCompleteTodo(id);
    };

    editTodo = (id, value, date) => this.props.onClickEditTodo(id, value, date);

    handleInputTodo = (e) => {
      this.setState({value: e.target.value})
    }

    renderTitleOrInput = () => {
      return this.props.updatedItem === this.props.id 
      ? (<input type='text' value={this.state.value} onChange={this.handleInputTodo}
        onClick={(e)=> e.stopPropagation()}/>) 
      : (this.state.value);
    };

    handleInputDateTodo = (e) => {
      this.setState({valueDate: e.target.value})
    }

    renderDateOrInput = () => {
      return this.props.updatedItem === this.props.id
      ? (<input type='date' value={this.state.valueDate} onChange={this.handleInputDateTodo}
          onClick={(e)=> e.stopPropagation()}/>)
      : (getLocalDate(this.state.valueDate))
    }

    componentDidMount () {    
      localStorage.setItem('todo', JSON.stringify(this.props.todos))
    }
    
    render () {
      return (
        <li 
          className={`${this.props.done === true ? 'todo-item todo-item-complete' : 'todo-item'}`} 
          id={this.props.id}
          onClick={()=> this.completeTodo(this.props.id)}
          key={this.props.id}
        >
          <div className="time-create">
            Завершить до: {this.renderDateOrInput()}
          </div>
          <div className="time-create">
            <p>Дата создания: {getTimeCreate(this.props.dateCreate)}</p>
          </div>
          <div className="todo-text">
            {this.renderTitleOrInput()}
          </div>
          <button className="button-edit"
            onClick={(e) => {
              e.stopPropagation()
              this.editTodo(this.props.id, this.state.value, this.state.valueDate)
            }}>
            <p className='material-symbols-outlined'>edit</p>
          </button>
          <button className="button-delete"
            onClick={(e)=>{
              this.deleteTodo(this.props.id)
              e.stopPropagation()
            }}>
            <p className="material-symbols-outlined">delete</p>
          </button>
        </li>
      )
    }
};

export default Todos;