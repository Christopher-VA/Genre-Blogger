const { User, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username, genreName }) => {
      const params = username ? { username } : {};
      const params2 = genreName ? { genreName } : {};
      return Post.find(params, params2).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    postByAuthor: async (parent, { author }) => {
      const params = author ? { author } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    genres: async () => {
      return Genre.find().populate('posts');
    },
    genre: async (parent, { genreName }) => {
      return Genre.findOne({ genreName }).populate('posts');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { title, body, author }) => {
      const post = await Post.create({ title, body, author });

      await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { posts: post._id }}
      );

      return post;
    },
    editPost: async (parent, { title, body }, context) => {
      const updatedPost = await Post.findOByIdAndUpdate(
        { _id: postId },
        { $push: { title, body, author: context.user.username } },
        { new: true }
      )

      return updatedPost;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    }
  },
};

module.exports = resolvers;
