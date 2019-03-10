import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todoList">
            {props.todo.map( item => ( <Todo text={item.task} id={item.id} completed={item.completed} />))}
        </div>
    );
}

export default TodoList;
