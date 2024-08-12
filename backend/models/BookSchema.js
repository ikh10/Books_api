const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: [String],
        required:true,
    },
    name: {
        type: String,
        required: true,
    },
    publish_date:
    {
        type: Number,
        required: true,
    },
    genres: {
        type: [String],
        required: true,
    }

}
);
const BookCollection = mongoose.model("books", BookSchema);
module.exports = BookCollection;
