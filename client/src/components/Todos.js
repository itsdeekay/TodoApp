import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = ({setCurrentId}) => {
    const todos = useSelector((state) => state.todos);
    return (
        <div className="container">
            To Do list
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                <ul className="list-group">
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.todo} setCurrentId={setCurrentId} />
                ))}
                </ul>
                
                </div>
                
            </div>
        </div>
    )
}

export default Todos