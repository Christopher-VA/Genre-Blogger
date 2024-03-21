const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
    createAt: Date
  }

  type Post {
    _id: ID
    title: String
    body: String
    author: String
    genre: String
    createAt
  }

  type Genre {
    _id: ID
    genreName: String
    posts: [Post]
  }

  type Query {
    users: [User]
    user(username: String!): User
    genres: [Genre]
    genre(name: String!): Genre
    posts: [Post]
    post(author: String!); Post
    postsInGenre(genre: String!): Integer
    me: User
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
