import React, { useState } from 'react';
const Todo = () => {
    const [todo,setTodo] = useState([])

    const [inputValue,setInputValue] = useState("") 

   const  handleInputChange = (e) =>{
            setInputValue(e.target.value)
    }

    const addTodo = () => {
        setTodo([...todo,inputValue])
        setInputValue("")
    }
    

    console.log(todo);

    const deleteTodo = (value) => {
        let newTodoArray = todo.filter( (todoValue) => todoValue !== value)
        setTodo(newTodoArray)
    }
   
    return <div>
                <h1>Simple To-Do List</h1>
                <div className="center-container">
                    <input type="text" placeholder='Add a new task' onChange={handleInputChange} value={inputValue}/>
                    <button className='button' onClick={addTodo}> Add Task</button>
                </div>
                {todo.map( (value,index) => {
                        return <ul>
                                    <li className='li-container'>
                                        <h1 className='heading'> {value}</h1>
                                        <button className='delete-button' onClick={ () => deleteTodo(value)}> Delete </button>
                                    </li>
                                </ul>
                }
                
                )}
            </div>
    
}

export default Todo


