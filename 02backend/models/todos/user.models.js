import mongoose from "mongoose"

// making schema 

const userSchema = new mongoose.Schema(
{
    // userName : String,
    // email : String,
    // isActive : Boolean

    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : [true,'password is required']
    }
}, 
{
    timestamps : true
}
)

export const User = mongoose.model('User',userSchema)