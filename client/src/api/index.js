import axios from 'axios';

const url = 'https://todowithlabel.herokuapp.com/todo';

export const getTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
export const getLables = () => axios.get(`${url}/labels/all`);