const mongoose = require('mongoose');





const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        require:[true,"rw title mouhem"],
        minLength:[3,"min length 3 "]
     },
    price: {
         type: Number,
         require:[true,"rw price mouhm"],
         min:[1,"min of the price is 1 "],
         max:[100,"max of the price 100"]
    },
    description :{
        type:String,
        require:[true,"rw description muuhm"]
    }

    
}, { timestamps: true });
module.exports = mongoose.model('product', ProductSchema);

