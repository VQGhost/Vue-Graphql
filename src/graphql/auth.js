import gql from "graphql-tag";

export const AUTH_SIGNUP = gql`
  mutation register($data: singUpInput!) {
    singUp(data: $data) {
      user {
        id
        name
        lastname
        email
      }
      token
    }
  }
`;

export const AUTH_SIGNIN = gql`
  mutation loginUser($data: loginInput!) {
    login(data: $data) {
      user {
        id
        name
        lastname
        email
      }
      token
    }
  }
`;
