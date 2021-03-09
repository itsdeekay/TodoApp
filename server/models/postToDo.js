import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    todo: String,
    label: String,
    status: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostTodo = mongoose.model('PostTODO', todoSchema);

export default PostTodo;