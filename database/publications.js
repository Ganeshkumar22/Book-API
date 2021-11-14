const mongoose = require("mongoose");

// Create schema for publications
const publicationsSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        books: [String]
      },
);

const publicationsModel = mongoose.model("Publications", publicationsSchema);

module.exports = publicationsModel;