const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({

    patientName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    


}, { timestamps: true });


const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;
