import React, { useState } from 'react';
import useCreateUser from '../../../hooks/useCreateUser';

const UseCreatePostPractice = () => {
  const [ name, setName ] = useState("Paul Smith")
  const [ username, setUsername ] = useState("KANTO")
  const [ email, setEmail ] = useState("smith@kanto.com")

  const createUser = useCreateUser()

  return (
    <div>
      <h1>Hook으로 Mutation 연습하기</h1>

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

export default UseCreatePostPractice;