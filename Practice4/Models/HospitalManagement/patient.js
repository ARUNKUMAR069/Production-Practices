const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({



    name: {
        type: String,
        required: true

    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true

    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },


}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
