import React, { useState } from "react";
import BottomPart from "./bottomPart";


const InputBar = () => {
    const [todos, setTodos] = useState([])
    
    //creates new todo
    //todoinput is the name of the input, in the IF todo is saying 'cleandishes' and 'CLEANDISHES' is the same so isNew is false because its not a new thing
    const createTask = (e) => {
        e.preventDefault()
        let newTodo = e.target.todoInput.value;
        let isNew = true;
        todos.forEach(todo => {
            if(todo.toLowerCase() === newTodo.toLowerCase()){
                isNew =false
            }
        }) // 
        isNew ? setTodos([...todos, newTodo]) : alert('todo exist')
        e.target.todoInput.value = ''
    }
    

    const removeTodo = (e,index) => {
        e.preventDefault()
        let filtered = todos.filter((todo,i) => i !== index) 
        setTodos(filtered)
    }


    return(
        <div>
            <form onSubmit={createTask}>
            <input 
            className="input"
            name="todoInput" 
            type="text" 
            // value={task}
            placeholder="add new task" 
           // onChange={(e) => pressEnter(e)}
            >
            </input>
            </form>
            <ul>
                {todos.map((todo,index)=> {
                    return(
                        <li key={index}>
                            {todo}
                            <button type="button" onClick={(e) => removeTodo(e,index)}>
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
            <BottomPart todos = {todos}/>
        </div>
    );
}

export default InputBar