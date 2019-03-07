import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      task : "",
      todo : [
        {
          task : "Task Number One",
          id : 159374927195849,
          completed : false
        }
    ]
  }
}

  formHandler = event => {
    event.preventDefault();
    let newTodo = {
      task : this.state.task,
      id : Date.now(),
      completed : false
    }
    this.setState({ 
      todo : [...this.state.todo, newTodo]
    });
    console.log(this.state.todo);
  };

  inputHandler = event => {
    this.setState({ [event.target.name] : event.target.value  });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-list">
        <TodoList todo={this.state.todo}/>
        <TodoForm formHandler={this.formHandler} inputHandler={this.inputHandler}/>
      </div>
    );
  }
}

export default App;
