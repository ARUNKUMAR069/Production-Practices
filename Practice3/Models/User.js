const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
);


const User = mongoose.model('User', userSchema);
module.exports = User;