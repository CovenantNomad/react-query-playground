import React, { useState } from 'react';
import request, { gql } from 'graphql-request';
import { useMutation } from 'react-query';
import { endpoint } from '../../../api/api';

const MutationPractice = () => {
  const [ name, setName ] = useState("Paul Smith")
  const [ username, setUsername ] = useState("KANTO")
  const [ email, setEmail ] = useState("smith@kanto.com")

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

  // const variables = {
  //   name: name,
  //   username: username,
  //   email: email
  // }

  const createUserRequest = async (name, username, email) => {
    return await request(endpoint, createUserMutation, {
      name: name,
      username: username,
      email: email,
    })
  }

  const createUser = useMutation(({ name, username, email }) => createUserRequest(name, username, email))
  

  return (
    <div>
      <h1>Mutation 연습해보기</h1>
      {createUser.isLoading ? <h1>회원가입중...</h1> : null}
      {createUser.isSuccess ? <h1>{createUser.data.createUser.name}님,<br/>회원가입 해주셔서 감사합니다</h1> : null}
      <button onClick={() => createUser.mutate({
        name: name, 
        username: username,
        email: email
      })}>
        회원가입
      </button>
    </div>
  );
}

export default MutationPractice;