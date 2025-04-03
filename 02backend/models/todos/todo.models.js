import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        /**
         * obviously it will be created by user so we need user reference
         * the type gives ObjectId and next to this ref attribute becomes compulsory to assign 
         * in ref we give the reference of our model user
         */
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    /**
     * now for sub todos in the main todo we use array of objects where the 
     * immediate inner object in the array gives how each object will look
     */
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'SubTodo'
        }
    ]
    // array of subtodos
},{timestamps : true})

export const Todo = mongoose.model('Todo',todoSchema)