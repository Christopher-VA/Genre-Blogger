const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    create_at: Date
  }

  type Post {
    _id: ID
    title: String
    body: String
    users: [User]
    genres: [Genre]
  }

  type Genre {
    _id: ID
    name: String
    posts: [Post]
  }

  type Query {
    users: [User]
    genres: [Genre]
    posts: [Post]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
