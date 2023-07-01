const mongoose = require("mongoose");
const {Schema} = mongoose

const BookSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    available:{
        type: Boolean,
        required : true
    },
    image:{
        type: String,
    },
})

const Book = mongoose.model("Book", BookSchema)
module.exports = Book;