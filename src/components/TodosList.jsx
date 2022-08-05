import React from 'react';

import Todos from './todoItem/Todos';

class TodosList extends React.Component {

  render () {
    return (
      <div className="todo-list">
          {this.props.todos!==[] && (
            <ul className="todo-list_param" id="todo-list_param">
             {this.props.todos.map((obj) => (
             <Todos 
              id={obj.id}
              key={obj.id}
              text={obj.text}
              done={obj.done}
              dateCreate={obj.dateCreate}
              timePlane={obj.timePlane}
              onClickCompleteTodo={this.props.onClickCompleteTodo}
              onClickEditTodo={this.props.onClickEditTodo}
              onClickDeleteTodo={this.props.onClickDeleteTodo}
              updatedItem={this.props.updatedItem}
              todos={this.props.todos}
              />))
             }
            </ul>)}
      </div>
    )

  }
}

export default TodosList;