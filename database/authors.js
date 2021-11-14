const mongoose = require("mongoose");

// Create schema for authors
const authorsSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        books: [String]
      },
);

const authorsModel = mongoose.model("Authors", authorsSchema);

module.exports = authorsModel;