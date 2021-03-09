import express from 'express';

import { getTodos, getTodo, createTodo, updateTodo, deleteTodo,getLabels } from '../controllers/todos.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.get('/:id', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/labels/all', getLabels);

export default router;