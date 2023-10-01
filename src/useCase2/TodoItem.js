import React from 'react';

function TodoItem({todo,tickTodo,deleteTodo}) {
    return ( <div>
            <input type='checkbox' checked={todo.completed} 
            onChange={()=>tickTodo(todo.id)}/>
            <span style={{textDecoration: todo.completed?'line-through':'none'}}>
                {todo.text}</span>
            <button onClick={()=>deleteTodo(todo.id)} >X</button>
    </div> );
}

export default TodoItem;