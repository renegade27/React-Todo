import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.formHandler} className="todo-menu">
            <input
                name="task"
                onChange={props.inputHandler}
                placeholder="Todo Text"
            />
            <button type="submit">Create</button>
        </form>
    );
}

export default TodoForm;