import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
      posts {
        _id
        title
        body
        createdAt
      }
      createAt: String
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        title
        body
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      body
      author
      createAt
      genre {
        _id
        genreName
      }
    }
  }
`

export const QUERY_POST = gql`
  query post {
    post {
      _id
      title
      body
      author
      createAt
      genre {
        _id
        genreName
      }
    }
  }
`

export const QUERY_GENRES = gql`
  query genres {
    genres {
      _id
      genreName
    }
  }
`

export const QUERY_GENRE = gql`
  query genre {
    genre {
      _id
      genreName
      posts {
        _id
        title
        body
        author
        createdAt
      }
    }
  }
`

export const QUERY_POSTBYAUTHOR = gql`
  query postbyauthor {
    postbyauthor {
      _id
      title
      body
      author
      createAt
      genre {
        _id
        genreName
      }
    }
  }
`