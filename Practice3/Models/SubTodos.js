const mongoose = require('mongoose');

const SubTodoSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    parentTodo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }

}, { timestamps: true });
const SubTodo = mongoose.model('SubTodo', SubTodoSchema);
module.exports = SubTodo;