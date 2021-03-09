import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getTodos } from './actions/todos';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Todos setCurrentId={setCurrentId}/>
    </div>
  );
}

export default App;
