const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
    createAt: String
  }

  type Post {
    _id: ID!
    title: String
    body: String!
    author: String!
    createAt: String
    genre: Genre
  }

  type Genre {
    _id: ID!
    genreName: String
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    genres: [Genre]
    genre(genreName: String!): Genre
    posts: [Post]
    post(_id: ID!): Post
    postByAuthor(author: String!): [Post]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, body: String!, author: String!): Post
    editPost(title: String!, body: String!, author: String!): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
