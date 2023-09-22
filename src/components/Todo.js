import React from 'react';

const Todo = (task ,toggleCompleted , deleteTodo) => {
    return (
        <div className='todo '>
            <div className="card " >
                <div className="card-body py-0 " >
                    <p onClick={() => toggleCompleted(task.id)} className={ `float-start mt-2 ${task.completed  ? 'completed':" "}`}>{task.task}</p>
                    <button className="btn btn-primary float-end ms-3 mt-1">
                    <i className="bi bi-pencil-square " />
                    </button>
                    <button className="btn btn-danger float-end  mt-1 " onClick={() => deleteTodo(task.id)} >
                    <i className="bi bi-trash " />
                    </button>
                    
                </div>
                </div>

        </div>
    );
};

export default Todo;