import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../actions/todos';
import {getLables} from '../api/index.js';

const Form = ({ currentId, setCurrentId }) => {

    const [todoData, setTodoData] = useState({ todo: '', label: '', status: false });
    const todo = useSelector((state) => (currentId ? state.todos.find((t) => t._id === currentId) : null));
    const dispatch = useDispatch();
    const [labels,setLabels] = useState([]);

    useEffect(() => {
        if (todo) setTodoData({...todo,status:false});
    }, [todo]);

    useEffect(() => {
        async function fetchLabel(){
            const fetchedLabels = await getLables()
            setLabels(fetchedLabels.data)
        }
        fetchLabel()
    }, [dispatch]);

    const clear = () => {
        setCurrentId(0);
        setTodoData({ todo: '', label: '', status: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (currentId === 0) {
            dispatch(createTodo(todoData));
            clear();
        } else {
            dispatch(updateTodo(currentId, todoData));
            clear();
        }
    }

    return (
        <div className="row justify-content-md-center" >
            <div className="col-sm-7" id="todo">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>To Do</legend>
                    <div className="mb-3">
                        <input type="text" name="todo" value={todoData.todo}
                         className="form-control"
                          placeholder="To Do" required
                          onChange={(e)=>setTodoData({...todoData,todo:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" 
                        list="datalistOptions" 
                        id="exampleDataList"
                         placeholder="Label..."
                         value={todoData.label}
                         onChange={(e)=>setTodoData({...todoData,label:e.target.value})} />
                        <datalist id="datalistOptions">
                            {
                                labels.map(label => (
                                    <option key={label} value={label} />
                                ))
                            }
                        </datalist>
                    </div>
                    <input type="submit" className="btn btn-primary" value={currentId!==0?"Update ToDo":"To Do"} />
                </fieldset>
            </form>
        </div>
        </div>
        
    )
}

export default Form