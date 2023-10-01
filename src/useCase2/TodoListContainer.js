import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoListcontainer() {

    const [newTask,setNewTask]= useState('');
    const [todos,setTodos]=useState([
        {id:1,text:'Learn React',completed:false},
        {id:2,text:'Build React Project',completed:false}
    ])

    const tickTodo=(id)=>{
        setTodos((prevTodo)=>prevTodo.map((todo)=>
            todo.id===id ?{...todo,completed:!todo.completed}:todo
        ))
    }
    const deleteTodo=(id)=>{
        setTodos((prevTodo)=>prevTodo.filter(todo=>todo.id!==id));
    }
    const addtodo=()=>{
        if(newTask.trim()!==""){
        setTodos([...todos,{id:Date.now(),text:newTask,completed:false}]);
        setNewTask('');
        }
        else{
            alert("Task Can not be Empty");
            setNewTask('');
        }
    }

    return ( <div>
        <h2>Todo List Application</h2>
        <input type='text' placeholder='Add New Task' value={newTask}
        onChange={(e)=>setNewTask(e.target.value)} />
        <button onClick={addtodo}>Add Todo</button>

        <TodoList todos={todos} tickTodo={tickTodo} deleteTodo={deleteTodo} />
    </div> );
}

export default TodoListcontainer;