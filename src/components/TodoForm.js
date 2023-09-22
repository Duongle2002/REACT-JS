import React ,{useState}from 'react';

const TodoForm = ({addTodo}) => {
    const [value , setValue] = useState ('')
    const handleSubmit  = e  =>{
        e.preventDefault();
        addTodo(value)
        setValue('')
    } 
    return (
        <div> 
             <form className="row" onSubmit={handleSubmit}>
                <div className="input-group col-9">
                    <input
                    type="text"
                    className="form-control"
                    value={value}
                    placeholder="Input search key"
                    aria-label="Input search key"
                    aria-describedby="button-addon2"
                    onChange={(e) => setValue(e.target.value) }
                    />
                    <button
                        className="btn btn-primary col-3"
                        type="button"
                        id="button-addon2"
                    >
                        Create
                    </button>
                </div>
        </form>
        </div>
    );
};

export default TodoForm;