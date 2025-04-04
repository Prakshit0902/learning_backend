import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    producId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product' 
    },
    quantity : {
        type : Number,
        required : true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    orderItems : {
        // this is because the orderItems will contain multiple products but also required the quantity so to 
        // do this we created a new schema orderItemSchema which contains productId and quantity
        type : [orderItemSchema]
    },
    address : {
        type : String,
        required : true
    },
    status : {
        /**
         * enum restricts the options of the value for the status among the ones in the enum
         * default is 'Pending' here
         */
        type : String,
        enum : ['Pending','Cancelled','Delivered'],
        default : 'Pending'
    }

},{timestamps : true})

export const Order = mongoose.model('Order',orderSchema)