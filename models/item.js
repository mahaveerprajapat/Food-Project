const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    category:{
        type:String,
    },
    origin:{
        type: String
    },
    price:{
        type:Number,
        required: true,
    },
    image:{
        type: String
    },
    description:{
        type:String
    }
});

const item = new mongoose.model("item",itemSchema);
module.exports = item;