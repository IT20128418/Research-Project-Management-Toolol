const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
 

const messageModelSchema = new mongoose.Schema({

   
    sender: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" },

    content:{
        type : String,
        trim: true
    },

    chat:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },

    readBy: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" }],

},
    {
        timestamps:true,
    }
);

const Message = mongoose.model("Message",messageModelSchema);
module.exports = Message;