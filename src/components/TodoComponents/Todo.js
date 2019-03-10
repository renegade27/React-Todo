import React from 'react';

// class Todo extends React.Component {
//     constructor(props) {
//         super();
//         this.text = props.text;
//         this.id = props.id;
//         this.completed = props.completed;
//         this.clickHandler = props.clickHandler;
//     }

//     render() {
//         return (
//             <div 
//             className={props.completed === "true" ? 'todo' : 'todo-completed'}
//             onClick={ event => { this.clickHandler(this.id); }}
//             >
//                 <p>{this.text}</p>
//             </div>
//         );
//     }
// }

const Todo = props => {
    return (
        <div 
        className={props.completed ? 'todo-completed' : 'todo'}
        onClick={ event => { props.clickHandler(props.id); }}
        >
            <p>{props.text}</p>
        </div>
    );
}

export default Todo;