import React from 'react';

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
    return (
       
        <div> 
             <form className="row" onSubmit={handleSubmit}>
                <div className="input-group col-9">
                    <input
                    type="text"
                    className="form-control"
                    value={value}
                    placeholder="Update key"
                    aria-label="Update key"
                    aria-describedby="button-addon2"
                    onChange={(e) => setValue(e.target.value) }/>
                    <button
                        className="btn btn-primary col-3"
                        type="button"
                        id="button-addon2"
                    >
                        Update
                    </button>
                </div>
        </form>
        </div>
        
    );
};

export default EditTodoForm;