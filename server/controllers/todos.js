import express from 'express';
import mongoose from 'mongoose';

import PostTodo from '../models/postToDo.js';

const router = express.Router();

export const getTodos = async (req, res) => { 
    try {
        const postTodos = await PostTodo.find();
        res.status(200).json(postTodos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTodo = async (req, res) => { 
    const { id } = req.params;

    try {
        const todo = await PostTodo.findById(id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTodo = async (req, res) => {
    const { todo, label, status } = req.body;
    const newTodo = new PostTodo({ todo, label, status })

    try {
        await newTodo.save();
        res.status(201).json(newTodo );
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { todo, label, status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Todo with id: ${id}`);

    const updatedTodo = { todo, label, status , _id: id };

    await PostTodo.findByIdAndUpdate(id, updatedTodo, { new: true });

    res.json(updatedTodo);
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Todo with id: ${id}`);

    await PostTodo.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const getLabels = async (req,res) => {
    try {
        const todo = await PostTodo.distinct("label",{"label":{$ne:""}});
        //console.log(todo)
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default router;