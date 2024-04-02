const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const genreSchema = new Schema({
    genreName: {
        type: String,
        required: true,
        trim: true,
    }
})

const Genre = model('Genre', genreSchema);

module.exports = Genre;