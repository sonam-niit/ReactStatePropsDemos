import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos,tickTodo,deleteTodo}) {
    return (<div>
                <h2>Todo List Comp</h2>
                {
                    todos.map((todo)=><TodoItem todo={todo} tickTodo={tickTodo} 
                    deleteTodo={deleteTodo}/>)
                }
            </div>);
}

export default TodoList;