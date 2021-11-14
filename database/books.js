const mongoose = require("mongoose");

// Create schema for books
const booksSchema = mongoose.Schema(
  {
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numOfPages: Number,
    authors: [Number],
    publication: [Number],
    category: [String]
  },
);

const booksModel = mongoose.model("Books", booksSchema);

module.exports = booksModel;