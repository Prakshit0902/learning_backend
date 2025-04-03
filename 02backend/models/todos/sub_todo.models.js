/**
 * in sub todos we will create 
 * contentType
 * markedAsDone
 * creationDate
 * 
 */

import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        default : false,
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
    
},{timestamps : true})

export const SubTodo = mongoose.model('SubTodo',subTodoSchema) 
/**
 * for mongo db the mongoose.model('User',userSchema)
 * 
 * the User --> users i.e in lowercase and plural in mongodb 
 * similarly Todo --> todos
 */

