const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    worksInhospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }],
    patients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Patient'
    },
    admittedPatients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Patient'
    },
    onLeave: {
        type: Boolean,
        default: false
    },
    onDuty: {
        type: Boolean,
        default: true
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
    address: {
        type: String,
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }



}, { timestamps: true });


const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;