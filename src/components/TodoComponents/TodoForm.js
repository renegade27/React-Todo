import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.formHandler} className="todo-menu">
                <input
                    name="task"
                    value={props.task}
                    onChange={props.inputHandler}
                    placeholder="Todo Text"
                />
                <button type="submit">Create</button>
            </form>
            <button onClick={props.clearHandler}>Clear</button>
        </div>
    );
}

export default TodoForm;