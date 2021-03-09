import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo,updateTodo } from '../actions/todos';

const Todo = ({todo,setCurrentId}) =>{
    const dispatch = useDispatch();
    return(
        <div className="row list-group-item rowMiddle">
            <div className="col-md-9 col-sm-12">
                <span className={todo.status?"Strike":""}>{todo.todo}</span>
                <span className="label">{todo.label}</span>
            </div>
            <div className="col-md-1 col-sm-2">
            <button type="button"
            onClick={() => setCurrentId(todo._id)}
             className="btn btn-primary btn-sm">Edit</button>
            </div>
            <div className="col-md-1 col-sm-2">
            <button type="button"
            onClick={() => dispatch(updateTodo(todo._id,{...todo,status:!todo.status}))}
             className="btn btn-success btn-sm">{todo.status?"Revert":"Done"}</button>
            </div>
            <div className="col-md-1 col-sm-2">
            <button type="button" 
            onClick={() => dispatch(deleteTodo(todo._id))}
             className="btn btn-danger btn-sm">Delete</button>
            </div>
    </div>
    )
}

export default Todo