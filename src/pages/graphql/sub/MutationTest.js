import request, { gql } from 'graphql-request';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { hyEndpoint } from '../../../api/api';

const MutationTest = () => {
  const [ phone, setPhone ] = useState("01031546355")
  const [ password, setPassword ] = useState("1234")

  const loginGQL = gql`
    mutation login($phone: String!, $password: String! ) {
      login(input: {
        phone: $phone,
        password: $password
      }) {
        accessToken,
        user {
          id
          name
          phone
        }
      }
    }
  `;

  const loginRequest = async (phone, password) => {
    return await request(hyEndpoint, loginGQL, {
      phone,
      password,
    })
  }

  const loginMutation = useMutation(({ phone, password }) => loginRequest(phone, password))

  console.log(loginMutation.data)

  return (
    <div>
      <h1>교회서버로 Mutation 연습해보기</h1>

      <button onClick={() => loginMutation.mutate({
        phone: phone,
        password: password
      })}>로그인</button>

      {loginMutation.isLoading ? <h1>로그인...</h1> : null}
      {loginMutation.isSuccess ? <h1>{loginMutation.data.login.user.name}님,<br/>로그인하셨습니다</h1> : null}
    </div>
  );
}

export default MutationTest;