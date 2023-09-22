import React ,{useState} from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';

uuidv4();


const TodoWaper = () => {
    const [todos , setTodos] = useState([

    ])
    const addTodo = todo => {
        setTodos([...todos , {id: uuidv4() , task: todo ,
        completed: false , isEditing : false}])
        console.log(todos)
    }
    const toggleCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            todo,completed: ! todo.completed }: todo))
    }
    return (
        <div className='TodoWaper'>
             <div className='container-sm'>
          <div className='Card' style={{ width: '30rem'  ,margin: '0 auto' , }}>
              <h1 className='title' style={{textAlign: 'center'}}>TODO LIST</h1>
              <TodoForm addTodo={addTodo}/>
              {todos.map((todo , index) => (
                <Todo task = {todo} key = {index}
                toggleCompleted = {toggleCompleted}/>
              ))}
              
            
            </div>
          </div>
          
            
        </div>
    );
};

export default TodoWaper;