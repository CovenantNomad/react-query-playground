import request, { gql } from 'graphql-request';
import { useMutation } from 'react-query';
import { endpoint } from '../api/api';

const useCreateUser = () => {
  const createUserMutation = gql `
    mutation createUser($name: String!, $username: String!, $email: String!) {
      createUser(input:{
        name: $name,
        username: $username,
        email: $email
      }) {
        id
        name
      }
    }
  `

  const createUserRequest = async (name, username, email) => {
    return await request(endpoint, createUserMutation, {
      name: name,
      username: username,
      email: email,
    })
  }

  return useMutation(({ name, username, email }) => createUserRequest(name, username, email))
}

export default useCreateUser;