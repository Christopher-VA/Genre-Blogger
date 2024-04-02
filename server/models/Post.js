const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  title: {
    type: String,
    required: 'You need to leave a title!',
    minlength: 1,
    maxlength: 28,
    trim: true,
  },
  body: {
    type: String,
    required: 'You need to leave text!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  genre: [
    {
      genreName: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
