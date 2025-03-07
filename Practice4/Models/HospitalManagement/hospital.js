const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    beds: {
        type: Number,
        required: true
    },
    occupiedBeds: {
        type: Number,
        required: true
    },
    availableBeds: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    pincode: {
        type: String,
        required: true
    },
    hospitalImage: {
        type: String,
        required: true
    },
    hospitalType: {
        type: String,
        enum: ['Private', 'Government'],
        required: true
    },
    hospitalRating: {
        type: Number,
        required: true
    },
    hospitalDescription: {
        type: String,
        required: true
    },
    hospitalServices: {
        type: [String],
        required: true
    },
    hospitalFacilities: {
        type: [String],
        required: true
    },
    hospitalTimings: {
        type: String,
        required: true
    },
    hospitalWebsite: {
        type: String,
        required: true
    },
    hospitalEmergencyContact: {
        type: Number,
        required: true
    },
    hospitalEmergencyEmail: {
        type: String,
        required: true
    },
    hospitalEmergencyContactPerson: {
        type: String,
        required: true
    },
    hospitalEmergencyContactRelation: {
        type: String,
        required: true
    },
    hospitalEmergencyContactAddress: {
        type: String,
        required: true
    },
    hospitalEmergencyContactCity: {
        type: String,
        required: true
    },
    hospitalEmergencyContactState: {
        type: String,
        required: true
    },
    hospitalEmergencyContactCountry: {
        type: String,
        required: true
    },
    hospitalEmergencyContactPincode: {
        type: String,
        required: true
    },
    hospitalEmergencyContactImage: {
        type: String,
        required: true
    },
    hospitalEmergencyContactType: {
        type: String,
        required: true
    },
    hospitalEmergencyContactRating: {
        type: Number,
        required: true
    },
    hospitalEmergencyContactDescription: {
        type: String,
        required: true
    },
    hospitalEmergencyContactServices: {
        type: [String],
        required: true
    },
    hospitalEmergencyContactFacilities: {
        type: [String],
        required: true
    },
    hospitalEmergencyContactTimings: {
        type: String,
        required: true
    },
    hospitalEmergencyContactWebsite: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContact: {
        type: Number,
        required: true
    },
    hospitalEmergencyContactEmergencyEmail: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactPerson: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactRelation: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactAddress: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactCity: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactState: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactCountry: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactPincode: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactImage: {
        type: String,
        required: true
    },
    hospitalEmergencyContactEmergencyContactType: {
        type: String,
        required: true
    },
    








}, { timestamps: true });


const Hospital = mongoose.model('Hospital', HospitalSchema);
module.exports = Hospital;