import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    diagnosedWith : {
        type : String,
        required : true
    },
    address : {
        type : String,
        requird : true
    },
    age : {
        type : Number,
        requird : true
    },
    bloodGroup : {
        type : String,
        requird : true
    },
    gender : {
        type : String,
        enum : ['M','F','O']
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Hospital'
    }
},{timestamps : true})

export const Patient = mongoose.model('Patient',patientSchema)