import React from 'react';

class TodoConditions  extends React.Component {
  completeAll = () => {
    this.props.onClickCompleteAll();
    localStorage.setItem('todo', JSON.stringify(this.props.todos))
  };

  deleteAll = () => {
    this.props.onClickDeleteAll();
  };

  render () {
    return (
      <div 
        className={`${(this.props.todos.length === 0) 
          ? "button-condition passive" 
          : "button-condition"}`}
        >
          <div>
            <button onClick={() => this.completeAll()}>
              Завершить все</button>
          </div>
          <div>
            <button onClick={() => this.deleteAll()}>
              Удалить все</button>
          </div>
      </div>
    )
  }
}

export default TodoConditions;