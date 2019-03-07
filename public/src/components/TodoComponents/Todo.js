import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super();
        this.text = props.text;
        this.id = props.id;
        this.completed = props.completed;
    }

    render() {
        return (
            <div className="todo">
                <p>{this.text}</p>
            </div>
        );
    }
}

export default Todo;