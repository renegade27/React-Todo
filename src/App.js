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
    this.setState(prevState => { 
      return {task : prevState.task, todo: [...prevState.todo, newTodo] }
    });
    // this.setState({
    //   todo: [...this.state.todo, newTodo], task : ""
    // });
  };

  inputHandler = event => {
    this.setState({ [event.target.name] : event.target.value  });
    console.log(event.target.value, this.state.task);
  };

  clickHandler = todoId => {
    console.log("Fired", todoId);
    this.setState(prevState => { 
      return {
        todo: prevState.todo.map( item => {
          if (item.id === todoId) {
            console.log(item);
            return {
              task: item.task,
              id: item.id,
              completed: !item.completed
            }
          }
          else {
            return item;
          }
          })
        }
      })
  };

  clearHandler = () => {
    console.log("Fired");
    this.setState(prevState => {
      return {
        todo: prevState.todo.filter( item => { 
          return !item.completed
         })
    }
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-list">
        <TodoList todo={this.state.todo} clickHandler={this.clickHandler}/>
        <TodoForm value={this.state.task} formHandler={this.formHandler} inputHandler={this.inputHandler} clearHandler={this.clearHandler}/>
      </div>
    );
  }
}

export default App;
