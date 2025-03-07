const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true

    },
    completed:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
    },
    subTodos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo'
    }]


},
    {
        timestamps: true
    }
);
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;