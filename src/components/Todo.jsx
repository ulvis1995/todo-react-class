import React from 'react';
import TodoConditions from './TodoConditions';
import TodoInput from './TodoInput';
import TodosList from './TodosList';

class Todo extends React.Component {
    storage;
    constructor (props) {
      super (props);
      this.state = {
        todos: [],
        updatedItem: null,
      };
    }

  handleAddTodo = (todo) => {    
    this.setState((state) =>({todos: [...state.todos, todo]}));
  };

  handleDeleteTodos = (id) => {
    const ind = this.state.todos.findIndex(obj => obj.id===id);
    this.state.todos.splice(ind, 1);
    this.setState((state) => ({todos: [...state.todos]}));
  };

  handleCompleteTodo = (id) => {
    const ind = this.state.todos.findIndex(obj => obj.id===id);
    const updateTodos = this.state.todos
    updateTodos[ind].done = !updateTodos[ind].done
    this.setState({todos: [...updateTodos]});
  };

  handleCompleteAll = () => {
    this.state.todos.forEach(obj => obj.done = true);
    this.setState((state) => ({todos: [...state.todos]}));
  };

  handleDeleteAll = () => {
    this.setState({todos: []});
  };

  handleEditTodo = (id, value, date) => {
    const ind = this.state.todos.findIndex(obj => obj.id===id);
    const updateTodos = this.state.todos
    updateTodos[ind].text = value
    updateTodos[ind].timePlane = date
    this.setState ({
      updatedItem: this.state.updatedItem === null ? id : null,
      todos: [...updateTodos]
    })
  };
  
  componentDidMount () {
    this.storage = JSON.parse(localStorage.getItem('todo'));
      if (localStorage.getItem('todo')) {
          this.setState({
              todos: this.storage
          })
      } else {
          this.setState({
              todos: [],
          })
      }
  }

  componentDidUpdate () {
    localStorage.setItem('todo', JSON.stringify(this.state.todos));
  }

  render () {
    return (
      <div className='todo'>
        <TodoInput onClickAddTodo={this.handleAddTodo} todos={this.state.todos}/>
        <TodoConditions todos={this.state.todos} 
          onClickCompleteAll={this.handleCompleteAll}
          onClickDeleteAll={this.handleDeleteAll} />
        <TodosList todos={this.state.todos} 
          onClickDeleteTodo={this.handleDeleteTodos}
          onClickCompleteTodo={this.handleCompleteTodo}
          onClickEditTodo={this.handleEditTodo}
          updatedItem={this.state.updatedItem}
          />
      </div>
    )
  }
}

export default Todo;