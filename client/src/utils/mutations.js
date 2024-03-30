import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!, $author: String!) {
    addPost(title: $title, body: $body, author: $author) {
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
`;

export const EDIT_POST = gql`
  mutation editPost($title: String!, $body: String!, $author: String!) {
    editPost(title: $title, body: $body, author: $author) {
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
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
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
`;
